/* eslint-disable */
import HTTP from "../http"

export const mokeGet = (data) => {
    HTTP.get( '/zolonbilling/api/pub/auth/captcha');
}