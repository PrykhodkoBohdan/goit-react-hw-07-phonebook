export const getFilterContacts = ({contacts, filter}) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.items.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
    );
  });
  return filteredContacts;
}


 