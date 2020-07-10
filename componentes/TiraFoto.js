import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const TiraFoto = props => {

    const [imagemURI, setImagemURI] = useState();

    const tirarFoto = async () => {
        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1
        });
        //console.log(foto);
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }

    const getGaleria = async () => {
        const foto = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1
        });
        //console.log(foto);
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }

    return (
        <View style={{ width: '80%' }}>
            <View style={estilos.principal}>
                <View style={estilos.previewDaImagem}>
                    {
                        !imagemURI ?
                            <Text style={{ color: '#fff' }}>Nenhuma foto</Text>
                            :
                            <Image
                                style={estilos.imagem}
                                source={{ uri: imagemURI }}
                            />
                    }
                </View>
                <View style={estilos.botao}>
                    <View style={{marginBottom:10}} >
                        <Button
                            title="Tirar foto"
                            onPress={tirarFoto}
                            color='#428e92'
                        />
                    </View>
                    <View >
                        <Button
                            title="Galeria"
                            onPress={getGaleria}
                            color='#428e92'
                        />
                    </View>
                </View>
            </View>
        </View>
    )
};
const estilos = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 15
    },
    previewDaImagem: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#CCC',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    },
    botao: {        
        width: '80%',
        marginBottom:5
        
    }
});
export default TiraFoto;