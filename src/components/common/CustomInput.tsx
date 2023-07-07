import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import Typography from '@components/common/Typography';

interface ICustomInput extends TextInputProps {
  labelTitle: string;
  error: string | undefined;
}
const CustomInput = ({labelTitle, error, ...props}: ICustomInput) => {
  return (
    <View style={styles.container}>
      <Typography>{labelTitle}</Typography>
      <TextInput
        style={{...styles.input, ...(props.multiline && styles.multiline)}}
        {...props}
      />
      {error && <Typography type="error">{error}</Typography>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  input: {
    minHeight: 40,
    borderWidth: 1,
    padding: 10,
  },
  multiline: {
    textAlignVertical: 'top',
  },
});
export default CustomInput;
