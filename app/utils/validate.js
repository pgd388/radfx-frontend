import { email, lower_character, number, special_character, upper_character } from '@/utils/constants';

export function containsNumber(value) {
  const is_valid = value.match(number) !== null;
  return is_valid;
}

export function containsSpecialCharacter(value) {
  const is_valid = value.match(special_character) != null;
  return is_valid;
}

export function containsUpperCaseCharacter(user_password) {
  const is_valid = user_password.match(upper_character) !== null;
  return is_valid;
}

export function containsLowerCaseCharacter(user_password) {
  const is_valid = user_password.match(lower_character) !== null;
  return is_valid;
}

export function emailFormat(user_email) {
  const is_valid = email.test(String(user_email).toLowerCase());
  return is_valid;
}

export function usernameLength(user_name) {
  const min_length = 5;
  const is_valid = user_name.length > min_length;
  return is_valid;
}

export function passwordLength(password) {
  const min_length = 8;
  const is_valid = password.length >= min_length;
  return is_valid;
}