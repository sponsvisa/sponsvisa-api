/* DO NOT EDIT, file generated by nestjs-i18n */

import { Path } from "nestjs-i18n";
export type I18nTranslations = {
    "auth": {
        "constants": {
            "name": {
                "minLengthError": string;
                "maxLengthError": string;
                "notValidError": string;
            };
            "email": {
                "notValidError": string;
            };
            "password": {
                "notValidError": string;
                "minLengthError": string;
                "maxLengthError": string;
                "notStrongEnoughError": string;
            };
            "confirmPassword": {
                "notValidError": string;
                "doNotMatchError": string;
                "minLengthError": string;
                "maxLengthError": string;
            };
        };
        "exceptions": {
            "userAlreadyExists": string;
            "incorrectCredentials": string;
            "invalidToken": string;
            "notAuthorized": string;
        };
    };
    "comment": {
        "constants": {
            "message": {
                "isNotValidError": string;
                "maxLengthError": string;
            };
            "parentId": {
                "isNotValidError": string;
            };
            "companyId": {
                "isNotValidError": string;
            };
        };
        "exceptions": {
            "companyNotFound": string;
            "commentNotFound": string;
        };
    };
    "common": {
        "errors": {
            "internalServerException": string;
            "userNotVerifiedException": string;
        };
        "constants": {
            "isPositive": string;
            "isInteger": string;
            "limitMaxNumber": string;
            "searchQueryIsString": string;
        };
    };
    "company": {
        "constants": {
            "name": {
                "notValidError": string;
                "maxLengthError": string;
            };
            "description": {
                "notValidError": string;
                "minLengthError": string;
                "maxLengthError": string;
            };
            "country": {
                "notValidError": string;
            };
            "website": {
                "notValidError": string;
            };
            "linkedin": {
                "notValidError": string;
            };
            "supportsSponsorshipProgram": {
                "notValidError": string;
            };
            "isApproved": {
                "notValidError": string;
            };
        };
        "exceptions": {
            "companyNotFound": string;
        };
    };
};
export type I18nPath = Path<I18nTranslations>;
