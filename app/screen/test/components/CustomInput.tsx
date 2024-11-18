import { defaultFormat } from "moment";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
const CustomInput = (props: any) =>{

    const {
        control, 
        name, 
        placeholder,
        rules={},
        secureTextEntry
    } = props;    
    return(
        <Controller
            control={control}
            name= {name}
            rules={rules}
            render={({field: {value, onChange, onBlur},fieldState: {error}})=>{
                return(
                    <View>
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        style={[styles.styleInput, {borderColor: error ? 'red' : "#e8e8e8"}]}
                        secureTextEntry={secureTextEntry}
                    />
                    {error && <Text style={{color: 'red'}}>{error.message || "error"}</Text>}
                </View>
                );
            }}
        />
    );
}
export default CustomInput;

const styles = StyleSheet.create({
    styleInput: {
        borderWidth: 1,
        borderColor: 'grey',
    }
});


