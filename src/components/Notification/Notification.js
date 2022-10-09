import PropTypes from 'prop-types';
import { Wrapper, Text } from './Notification.styled';
const Notification = ({ message }) => (
  <Wrapper>
    <Text>{message}</Text>
  </Wrapper>
);
Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
