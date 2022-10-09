import PropTypes from 'prop-types';
import { Wrapper, Text, SelectedText } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <Wrapper>
    <Text>Good: {good}</Text>
    <Text>Neturel: {neutral}</Text>
    <Text>Bad: {bad}</Text>
    <SelectedText>Total: {total}</SelectedText>
    <SelectedText>Positive feedback: {positiveFeedback}%</SelectedText>
  </Wrapper>
);
Statistics.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};
export default Statistics;
