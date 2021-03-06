import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {lightTheme} from './layout/theme';
import authProvider from "./auth/authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
      <Admin dataProvider={dataProvider} authProvider={authProvider} theme={lightTheme}>
          <Resource name="users" list={ListGuesser} edit={EditGuesser} />
          <Resource name="posts" list={ListGuesser} edit={EditGuesser} />
          <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
          <Resource name="photos" list={ListGuesser} edit={EditGuesser} />
      </Admin>
  );

export default App;
