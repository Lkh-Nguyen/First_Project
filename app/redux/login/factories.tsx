import axios from 'axios';
import { BASE_API_URL, BASE_API_URL_FM } from '../../utils/Consts';
import ApiConstants from '../../adapter/ApiConstants';

// TODO: check why env BASE_API_URL is undefined
// const url = Config.BASE_API_URL;
const url = BASE_API_URL;
console.log(`${url}/${ApiConstants.LOGIN}`,);
const Factories = {
    signIn: (data: any) =>
        axios({
            method: 'POST',
            url: `${url}/${ApiConstants.LOGIN}`,
            data: data,
            headers: {
                'x-apikey': 'PnVdWXApSHQlUiJDey14aFU4TVVROT1aP0tAOVhwSGE',
                'x-serial-number': 'G6TZL899N70M',
                'x-requestid': '593a8bfb-f53e-42ad-ae96-75e2ae803f1a',
            }
        }),
    
};
export default Factories;
