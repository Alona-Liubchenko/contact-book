import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import ContactList from 'components/ContactList/ContactList';
import { ContactForms } from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Box, Heading, Div } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box>
      <Div>
        <ContactForms />
      </Div>
      <Div>
        <Heading>Contacts</Heading>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Div>
    </Box>
  );
}
