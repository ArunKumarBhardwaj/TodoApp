import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.PRIMARY_BACKGROUND,
  },
  scrollview: {
    flex: 1,
    backgroundColor: colors.PRIMARY_BACKGROUND,
  },
  headingContainer: {},
  heading: {
    color: colors.PRIMARY_TEXT,
    fontSize: 18,
    fontWeight: '700',
  },
  inputContainer: {
    paddingVertical: 15,
  },
  inputStyle: {
    borderRadius: 10,
    borderColor: colors.PRIMARY_TEXT,
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 10,
    color: colors.PRIMARY_TEXT,
  },
  itemContainer: {
    paddingVertical: 20,
  },
  todos: {
    color: colors.PRIMARY_TEXT,
    fontSize: 18,
    fontWeight: '700',
  },
  btnStyle: {
    backgroundColor: colors.BUTTON_COLOR,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.PRIMARY_TEXT,
    fontSize: 14,
    fontWeight: '600',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  itemNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexText: {
    fontSize: 16,
    color: colors.PRIMARY_TEXT,
  },
  completedText: {
    fontSize: 16,
    paddingLeft: 10,
    color: colors.LIGHT_GRAY,
    textDecorationLine: 'line-through',
  },
  itemText: {
    fontSize: 16,
    paddingLeft: 10,
    color: colors.PRIMARY_TEXT,
  },
  crossSize: {
    width: 28,
    height: 28,
  },
  btnView: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
    width: '100%',
    paddingVertical: 10,
  },
  contentContainer: {},
});
