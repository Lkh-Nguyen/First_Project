export const required = (value: any) => (value ? undefined : 'Bạn chưa nhập ô này!');

export const genValidate = (validate: any, fieldName: string) => {
    let _validate: any = {};
    validate.forEach((e: any, i: number) => {
        _validate[`${fieldName}_${i}`] = e;
    });
    return _validate;
};