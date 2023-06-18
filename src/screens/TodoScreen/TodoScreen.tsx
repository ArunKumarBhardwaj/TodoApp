import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './TodoStyles';
import {colors} from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
} from '../../redux/reducers/todoReducer';
import CheckBox from '@react-native-community/checkbox';

const TodoScreen = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<any>();
  const todos = useSelector((state: any) => state.todos);

  const handleAddTodo = () => {
    if (inputText.trim()) {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };
  const TodoItem = ({item, index}: any) => {
    const dispatch = useDispatch();
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const handleToggle = () => {
      dispatch(toggleTodo(item.id));
    };

    const handleDelete = () => {
      dispatch(deleteTodo(item.id));
    };

    return (
      <View style={styles.todoItem}>
        <TouchableOpacity style={styles.itemNameContainer}>
          <CheckBox
            disabled={false}
            value={item?.completed === false ? false : true}
            style={{top: 2}}
            onChange={() => {
              handleToggle();
              setToggleCheckBox(!toggleCheckBox);
            }}
          />
          <Text style={item.completed ? styles.completedText : styles.itemText}>
            {item.text}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete()}>
          <Image
            source={require('../../assets/images/delete.png')}
            resizeMode="contain"
            style={styles.crossSize}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Add Items to the list</Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            placeholder="Enter item"
            style={styles.inputStyle}
            value={inputText}
            onChangeText={text => setInputText(text)}
            placeholderTextColor={colors.LIGHT_GRAY}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.todos}>Todos :</Text>
          <FlatList
            data={todos}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <TodoItem item={item} />}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            handleAddTodo();
          }}>
          <Text style={styles.btnText}>ADD ITEM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoScreen;
