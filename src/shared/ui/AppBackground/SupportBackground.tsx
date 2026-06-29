import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, RadialGradient, Stop, Ellipse } from 'react-native-svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface SupportBackgroundProps {
    children?: React.ReactNode;
    className?: string;
}

export const SupportBackground = ({ children, className = '' }: SupportBackgroundProps) => {
    return (
        <View className={`flex-1 bg-brand-light ${className}`}>
            {/* Інвертований градієнт: від білого до світло-сірого */}
            <LinearGradient
                colors={['#FFFFFF', '#F5F5F5', '#E5E5E5']}
                locations={[0, 0.6, 1]}
                style={StyleSheet.absoluteFill}
            />

            {/* Світлий Glow-ефект (можна зробити легким помаранчевим або сірим) */}
            <View style={styles.glowContainer}>
                <Svg height="100%" width="100%">
                    <Defs>
                        <RadialGradient
                            id="supportGrad"
                            cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%"
                            gradientUnits="userSpaceOnUse"
                        >
                            {/* Легкий помаранчевий відтінок для фірмового стилю */}
                            <Stop offset="0%" stopColor="#FF6D00" stopOpacity="0.08" />
                            <Stop offset="30%" stopColor="#C3C3C3" stopOpacity="0.03" />
                            <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                        </RadialGradient>
                    </Defs>
                    <Ellipse cx={SCREEN_WIDTH / 2} cy={420} rx={420} ry={420} fill="url(#supportGrad)" />
                </Svg>
            </View>

            <View className="flex-1 z-10">
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    glowContainer: {
        position: 'absolute',
        bottom: -400,
        left: 0, right: 0,
        height: 841, width: '100%',
        pointerEvents: 'none',
    },
});