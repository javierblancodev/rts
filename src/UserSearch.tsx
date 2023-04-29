import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

export default class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };
}
