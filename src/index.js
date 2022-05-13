import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import React from "react";
import ReactDOM from "react-dom";

import JobsList from "./components/jobslist";
import {IntlProvider} from "react-intl";

const getLocale = () => {
    const locale =  navigator.language || navigator.userLanguage
    console.log("Locale: " + locale)
    return locale
}

ReactDOM.render(<IntlProvider locale={getLocale()} messages={getLocale().indexOf("es") === -1 ? localeEnMessages: localeEsMessages}>
    <JobsList locale={getLocale()}/>
</IntlProvider>, document.getElementById("root"));
