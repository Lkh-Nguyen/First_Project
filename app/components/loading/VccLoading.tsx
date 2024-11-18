import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import Modal from 'react-native-modal';
import { CommonColors, CommonSize } from '../../utils/CommonStyles';
import { scale } from '../../libs/reactSizeMatter/scalingUtils';
export default class VccLoading extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            index: 7,
            types: [
                'CircleFlip',
                'Bounce',
                'Wave',
                'WanderingCubes',
                'Pulse',
                'ChasingDots',
                'ThreeBounce',
                'Circle',
                '9CubeGrid',
                'WordPress',
                'FadingCircle',
                'FadingCircleAlt',
                'Arc',
                'ArcAlt',
            ],
            size: 64,
            color: CommonColors.mainActive,
        };
    }

    render() {
        const { types, index, color, size } = this.state;
        const { show = true } = this.props;
        const type = types[index];
        return (
            <Modal
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={show}
                avoidKeyboard
                useNativeDriver
                backdropTransitionOutTiming={0}
                // backdropTransitionInTiming={0}
                backdropColor={CommonColors.backdropColor}
                backdropOpacity={0.2}
            >
                <View style={styles.container}>
                    <Image
                        source={require('../../../assets/images/loading.gif')}
                        style={{ width: scale(30), height: scale(30) }}
                    />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});
