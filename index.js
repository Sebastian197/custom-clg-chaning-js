/**
 * Muestra un log personalizado de tipo OK
 * @example
 * ok('Hello world');
 * @param {string} msg Mensaje que queremos mostrar
 * @param {string} bgColor Color que le queremos dar al fondo
 */
const ok = (msg, bgColor = '#00ff00') => {
    const styles = `background-color: ${bgColor}; color: white; display: block; padding: 0.3rem 1rem; font-family: Andale Mono, monospace; border-radius: 5px;`;
    showLog(styles, `👍 ${msg}`);
};

/**
 * Muestra un log personalizado de tipo INFO
 * @example
 * info('Hello world');
 * @param {string} msg Mensaje que queremos mostrar
 * @param {string} bgColor Color que le queremos dar al fondo
 */
const info = (msg, bgColor = '#4db8ff') => {
    const styles = `background-color: ${bgColor}; color: white; display: block; padding: 0.3rem 1rem; font-family: Andale Mono, monospace; border-radius: 5px;`;
    showLog(styles, `ℹ️ ${msg}`);
};

/**
 * Muestra un log personalizado de tipo ERROR
 * @example
 * error('Hello world');
 * @param {string} msg Mensaje que queremos mostrar
 * @param {string} bgColor Color que le queremos dar al fondo
 */
const error = (msg, bgColor = '#ff0000') => {
    const styles = `background-color: ${bgColor}; color: white; display: block; padding: 0.3rem 1rem; font-family: Andale Mono, monospace; border-radius: 5px;`;
    showLog(styles, `👎 ${msg}`);
};

/**
 * Muestra un log personalizado de tipo WARNING
 * @example
 * warning('Hello world');
 * @param {string} msg Mensaje que queremos mostrar
 * @param {string} bgColor Color que le queremos dar al fondo
 */
const warning = (msg, bgColor = '#ff6600') => {
    const styles = `background-color: ${bgColor}; color: white; display: block; padding: 0.3rem 1rem; font-family: Andale Mono, monospace; border-radius: 5px;`;
    showLog(styles, `⚠ ${msg}`);
};

const showLog = (msg, styles) => {
    console.log('%c%s', styles, msg)
};

module.exports = {
    ok,
    info,
    error,
    warning
};