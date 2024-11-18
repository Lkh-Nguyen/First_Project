import { Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale, scale, verticalScale } from "../../../libs/reactSizeMatter/scalingUtils";
import { CommonColors, Fonts } from "../../../utils/CommonStyles";
import Utils from "../../../utils/Utils";
import { useEffect, useState } from "react";
//import SVG, Images
import IcWelcome from '../../../../assets/svg/tkp/ic-welcome.svg';
import IcFingerprint from '../../../../assets/svg/tkp/ic-fingerprint.svg';
import IcRight from '../../../../assets/svg/tkp/ic_right.svg';
import ImgTkp from '../../../../assets/images/img_timekeeping.png';
import WorkDone from '../../../../assets/images/work_done.png';
import PendingApp from '../../../../assets/images/pending_app.png';
import LinearGradient from 'react-native-linear-gradient';
import { REPORT_LINEAR_CODE_COLOR } from "../../../utils/Consts";
import Header from "../../../components/header/Header";
import Toast from "react-native-toast-message";


type ListWeek = {
    day: string,
    date: string | null,
    month: number,
    year: number,
    isNow: boolean
}
const TimeKeepingScreen = () =>{
    
    const [listWeek, setListWeek] = useState<ListWeek[]>([]); 
    function getListWeek() {
        const listWeek = [];
        const currentDate = new Date(); // Lấy ngày hiện tại
        const currentDay = currentDate.getDay(); // Lấy thứ của ngày hiện tại (0: Chủ nhật, 1: Thứ 2, ..., 6: Thứ 7)
        const daysInWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']; // Mảng chứa tên các ngày trong tuần

        const startOfWeek = new Date(currentDate); // Sao chép ngày hiện tại
        startOfWeek.setDate(currentDate.getDate() - currentDay); // Đặt ngày bắt đầu của tuần (Chủ nhật) bằng cách trừ đi thứ của ngày hiện tại

        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            const currentDateFormatted = currentDate.toISOString().slice(0, 10);
            const dateOfTheDayFormatted = date.toISOString().slice(0, 10);
            listWeek.push({
                day: daysInWeek[i],
                date: Utils.getDate(date, 16),
                month: date.getMonth(),
                year: date.getFullYear(),
                isNow: currentDateFormatted === dateOfTheDayFormatted,
            });
        }
        setListWeek(listWeek);
    }

    useEffect(() => {
        getListWeek();
        return () => {
        };
    }, []);
    return(
        <ScrollView>
            <View style={styles.mainContainer}>
            <View style={styles.container}>
                
                <LinearGradient
                    colors={[
                        `${REPORT_LINEAR_CODE_COLOR[3].gradientFrom}`,
                        `${REPORT_LINEAR_CODE_COLOR[3].gradientTo}`,
                    ]}
                    style={styles.linearGradient}
                    end={{ x: 0.5, y: 0.5 }}
                >
                
                    <Header
                        isBack={false}
                        headerStyle={{
                            zIndex: 2,
                        }}
                    />
                    <Toast/>
                        
                    {/* */}
                    <View style={[styles.boxShadow, styles.boxInfo]}>
                        
                        <ImageBackground
                            // eslint-disable-next-line global-require
                            source={require('../../../../assets/images/image_welcome.png')}
                            imageStyle={{ borderRadius: 8 }}
                            style={styles.boxImage}    
                        >
                            <View style={styles.overlay} />
                                <View style={styles.profileUser}>
                                    <Text style={styles.welcome}>
                                        Xin chào Hoàng Nguyên
                                    </Text>
                                    <Text style={styles.quest}>Có Công Mài Sắt Có Ngày Nên Kim.</Text>
                                </View>
                                <IcWelcome style={styles.imgWel} />
                        </ImageBackground>

                        <View style={styles.listWeek}>
                            {listWeek?.map((item, index) => {
                                const isActive = true;
                                return (
                                    <TouchableOpacity
                                        onPress={() =>{}}
                                        key={index}
                                        style={[
                                            styles.weekItem,
                                            item?.isNow && isActive ? styles.nowItem : null,
                                            isActive ? styles.nowItem : null,
                                        ]}
                                    >
                                        <Text style={[styles.textItem]}>{item?.day}</Text>
                                        <Text
                                            style={[
                                                item?.isNow && isActive
                                                    ? styles.textItemDateActive
                                                    : null,
                                                isActive ? styles.textItemDateActive : null,
                                            ]}
                                        >
                                            {item?.date}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        <TouchableOpacity onPress={() => {}} style={styles.checkIn}>
                            <View
                                style={{
                                    ...styles.checkInBox,
                                    backgroundColor: CommonColors.mainBlue,
                                }}
                            >
                                <View style={styles.checkInLeft}>
                                    <Text style={styles.textCheckIn}>Chấm công</Text>
                                    {/* <Text style={styles.textTimeCheckIn}>
                                        {timeEnd ? timeEnd : timeStart}
                                    </Text> */}
                                </View>
                                <View style={styles.icFingerprint}>
                                    <IcFingerprint />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>


                    {/* */}
                    <View style={[styles.boxShadow, styles.listTKP,{height: verticalScale(212),}]}>
                        <TouchableOpacity onPress={()=>{}} style={styles.headerList}>
                            <Text style={styles.titleList}>Lịch sử chấm công</Text>
                            <View style={styles.btnList}>
                                <IcRight />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.bodyList}>
                            <View style={styles.bodyTask}>
                                <Image source={ImgTkp} />
                                <Text style={styles.textTask}>
                                    Hôm nay chưa chấm công !
                                </Text>
                            </View>
                        </View>
                    </View>


                    {/* */}
                    <View style={[styles.boxShadow, styles.listTKP, {height: verticalScale(292)}]}>
                        <TouchableOpacity onPress={()=>{}} style={styles.headerList}>
                            <Text style={styles.titleList}>Công việc hôm nay</Text>
                            <View style={styles.btnList}>
                                <IcRight />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.bodyList}>
                            <View style={styles.bodyTask}>
                                <Image source={WorkDone} />
                                <Text style={styles.textTask}>
                                    Chúc mừng bạn đã hoàn thành hết tất cả công việc
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* */}
                    <View style={[styles.boxShadow, styles.listTKP, {height: verticalScale(292)}]}>
                        <TouchableOpacity onPress={()=>{}} style={styles.headerList}>
                            <Text style={styles.titleList}>Đơn đợi bạn duyệt</Text>
                            <View style={styles.btnList}>
                                <IcRight />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.bodyList}>
                            <View style={styles.bodyTask}>
                                <Image source={PendingApp} />
                                <Text style={styles.textTask}>
                                    Bạn chưa gửi đơn nào!
                                </Text>
                            </View>
                        </View>
                        
                    </View>

                    {/* */}
                    <View style={[styles.boxShadow, styles.listTKP, {height: verticalScale(292),marginBottom: verticalScale(20)}]}>
                        <TouchableOpacity onPress={()=>{}} style={styles.headerList}>
                            <Text style={styles.titleList}>Đơn bạn đã gửi</Text>
                            <View style={styles.btnList}>
                                <IcRight />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.bodyList}>
                            <View style={styles.bodyTask}>
                                <Image source={PendingApp} />
                                <Text style={styles.textTask}>
                                    Bạn chưa gửi đơn nào!
                                </Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    

    body: {
        alignItems: 'center',
    },

    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: -70,
    },
    linearGradient: {
        height: '100%',
    },
    boxShadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.18)',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 48,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    boxImage: {
        backgroundColor: CommonColors.mainBlue,
        borderRadius: 8,
        width: 329,
        height: 147,
        marginHorizontal: 16,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 8,
        backgroundColor: '#3750B299',
    },
    imgWel: {
        position: 'relative',
        left: -16,
        bottom: -13,
    },
    boxInfo: {
        flexDirection: 'column',
        gap: 10,
        marginTop: 70,
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 14,
        marginHorizontal: 16,
    },
    welcome: {
        color: CommonColors.white,
        fontSize: 14,
        lineHeight: 16,
    },
    listWeek: {
        display: 'flex',
        marginTop: 14,
        flexDirection: 'row',
        paddingHorizontal: scale(16),
        justifyContent: 'space-between',
    },
    textItem: {
        textAlign: 'center',
        fontSize: scale(12),
    },
    textItemDate: {
        textAlign: 'center',
        color: CommonColors.textBlack,
    },
    textItemDateActive: {
        color: CommonColors.textBlue,
    },
    nowItem: {
        // border: CommonColors.mainBlue,
        borderWidth: 1,
        borderColor: CommonColors.mainBlue,
        backgroundColor: CommonColors.white,
    },
    weekItem: {
        marginLeft: 8,
        display: 'flex',
        width: 42,
        paddingVertical: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#F1F3FE',
        // border: 1px solid var(--Primary-Blue, #3750B2);
    },
    quest: {
        fontWeight: '500',
        fontSize: scale(16),
        lineHeight: scale(18.75),
        marginTop: 6,
        maxWidth: 203,
        color: CommonColors.white,
    },
    profileImg: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    profileUser: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        position: 'absolute',
        left: 105,
        top: 8,
    },
    checkInBox: {
        padding: 8,
        width: '100%',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: CommonColors.mainBlue,
    },
    checkIn: {
        marginTop: 16,
        flexDirection: 'row',
        paddingHorizontal: scale(16),
        height: 64,
        width: '100%',
    },
    checkInLeft: {
        flexDirection: 'column',
        display: 'flex',
        paddingHorizontal: scale(8),
    },
    textCheckIn: {
        fontSize: 20,
        color: CommonColors.white,
    },
    textTimeCheckIn: {
        marginTop: 4,
        fontSize: 12,
        color: CommonColors.white,
        ...Fonts.defaultBold,
    },
    inputHeader: {
        flexDirection: 'row',
        height: scale(77),
    },
    icFingerprint: {
        backgroundColor: '#fff',
        height: scale(32),
        width: scale(32),
        marginRight: 8,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listTKP: {
        marginTop: scale(15),
        backgroundColor: '#fff',
        // borderRadius: 14,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 16,
    },
    bodyList: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        height: 200,
        paddingHorizontal: scale(16),
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: scale(12),
    },
    bodyTask: {
        alignItems: 'center',
    },
    headerList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(16),
        paddingVertical: 8,
    },
    titleList: {
        ...Fonts.defaultBold,
        color: CommonColors.textBlue,
        fontSize: moderateScale(16),
        lineHeight: 24,
        marginTop: 4,
    },
    textTask: {
        ...Fonts.defaultInter,
        color: CommonColors.mainGray,
        fontSize: moderateScale(12),
        lineHeight: 16,
        marginTop: 8,
    },
    btnList: {
        display: 'flex',
        width: 20,
        height: 20,
        marginTop: 12,
        paddingVertical: 2.775,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayContainer: {
        // backgroundColor: CommonColors.mainGray,
    },
    dayTitle: {
        fontWeight: '500',
        fontSize: 14,
        paddingLeft: 16,
        color: CommonColors.black,
    },
    dayContent: {
        paddingTop: scale(8),
        paddingLeft: scale(8),
    },
    dayItem: {
        flexDirection: 'row',
        padding: scale(8),
        height: scale(56),
        alignItems: 'center',
    },
    userName: {
        ...Fonts.defaultMedium,
        fontWeight: '400',
        fontSize: scale(14),
        lineHeight: scale(18.75),
        color: CommonColors.textColor,
    },
    text5: {
        ...Fonts.defaultRegular,
        fontWeight: '400',
        fontSize: scale(12),
        color: CommonColors.textNeutral,
    },
});


export default TimeKeepingScreen;
