import moment from 'moment';
import md5 from 'md5';
import { Alert } from 'react-native';
import { verticalScale } from '../libs/reactSizeMatter/scalingUtils';
import _Toast from 'react-native-toast-message'
import AppConfig from './AppConfig';
import MESSAGE_ERROR from './ErrorCode';
export default class Utils {

    static MD5(data: any) {
        return md5(data)
    }

    static getLocation() {
        return [AppConfig.LAT, AppConfig.LON]
    }

    static getDate(timestamp: any, type = 1) {
        if (timestamp == null) {
            return null
        }
        let result = null
        switch (type) {
            case 1:
                result = moment(timestamp).format('DD/MM/YYYY')
                break
            case 2:
                result = moment(timestamp).format('DD.MM.yyyy - HH:mm')
                break
            case 3:
                result = moment(timestamp).format('yyyy-MM-DD')
                break
            case 4:
                result = moment(timestamp).format('HH:mm:ss - DD.MM.yyyy')
                break
            case 5:
                result = moment(timestamp).format('DD.MM.yyyy - HH:mm')
                break
            case 6:
                result = moment(timestamp).format('HH:mm')
                break
            case 7:
                result = moment(timestamp).format('HH:mm:ss')
                break
            case 8:
                result = moment(timestamp).format('DD/MM')
                break
            case 9:
                result = moment(timestamp).format('DD/MM/YYYY')
                break
            case 10:
                result = moment(timestamp).format('YYYY-MM-DDTHH:mm:ss.ssss')
                break
            case 11:
                result = moment(timestamp).format('HH:mm')
                break
            case 12:
                result = moment(timestamp).format('HHmm')
                break
            case 13:
                result = moment(timestamp).format('Month d yyyy')
                break
            case 14:
                result = moment(timestamp).format('YYYY-MM-DD')
                break
            case 15:
                result = moment(timestamp).format('MM/YYYY')
                break
            case 16:
                result = moment(timestamp).format('DD')
                break
            case 17:
                result = moment(timestamp).format('YYYY/MM/DD')
                break
            case 18:
                result = moment(timestamp).subtract(1, 'months').endOf('month').format('MM/YYYY')
                break

            default:
                break
        }
        return result
    }
}