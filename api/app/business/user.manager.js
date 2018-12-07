'use strict';

import PasswordDAO from '../DAO/passwordDAO';
import TokenDAO from '../DAO/tokenDAO';
import UserDAO from '../DAO/userDAO';
import applicationException from '../service/applicationException';
import sha1 from 'sha1';

function create(context) {

  function hashString(password) {
    return sha1(password);
  }

  async function authenticate(name, password) {
    console.log('user', name, password)
    let userData;
    const user = await UserDAO.getByEmailOrName(name);
    if (!user) {
      throw applicationException.new(applicationException.UNAUTHORIZED, 'User with that email does not exist');
    }
    if (!user.active) {
      throw applicationException.new(applicationException.NOT_FOUND, 'User does not exist or does not active');
    }
    userData = await user;
    await PasswordDAO.authorize(user.id, hashString(password));
    const token = await TokenDAO.create(userData);
    return getToken(token);
  }

  function getToken(token) {
    return {token: token.value};
  }

  async function createNewOrUpdate(userData) {
    console.log(userData);
    const user = await UserDAO.createNewOrUpdate(userData);
    console.log('user', user);
    if (await userData.password) {
      return await PasswordDAO.createOrUpdate({userId: user.id, password: hashString(userData.password)});
    } else {
      return user;
    }
  }

  return {
    authenticate: authenticate,
    createNewOrUpdate: createNewOrUpdate,
  };
}

export default {
  create: create
};

