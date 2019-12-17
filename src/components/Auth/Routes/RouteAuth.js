/* eslint-disable react/prop-types */
import React from 'react';
import LandingPage from '../../../views/landing/LandingPage';

// eslint-disable-next-line react/prop-types
export default function RouteAuth({
  children: Component,
  // eslint-disable-next-line no-unused-vars
  dest = '/',
  // eslint-disable-next-line no-unused-vars
  ...props
}) {
  const token = localStorage.getItem('token');
  return token ? <Component /> : <LandingPage />;
}

// const AuthContext = React.createContext();
// class AuthProvider extends React.Component {
//   state = { token: null };

//   componentDidMount() {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       this.setState({ token: storedToken });
//     }
//   }

//   render() {
//     return (
//       <AuthContext.Provider value={{ token: this.state.token }}>
//         {this.props.children}
//       </AuthContext.Provider>
//     );
//   }
// }

// const AuthConsumer = AuthContext.Consumer;

// export { AuthProvider, AuthConsumer };
