export const USERS = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '123-456-7891' },
    { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', phone: '123-456-7892' },
    { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', phone: '123-456-7893' },
    { id: 5, name: 'William Brown', email: 'william.brown@example.com', phone: '123-456-7894' },
  ];
  
  for (let i = 6; i <= 100; i++) {
    USERS.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      phone: `123-456-${7000 + i}`
    });
  }
  