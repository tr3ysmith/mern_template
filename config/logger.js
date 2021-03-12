const { createLogger, format, transports } = require('winston');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const logLevel = process.env.NODE_LOG_LEVEL || (env === 'development') ? 'silly' : 'info';

// Converts the module to a label
const getLabel = function(callingModule) {
    const parts = callingModule.filename.split(path.sep);
    return path.join(parts[parts.length - 2], parts.pop());
};

module.exports = function(callingModule) {
    return createLogger({
    
        // Change level if in dev environment versus production
        level: logLevel,
        format: format.combine(
            format.label({ label: callingModule ? getLabel(callingModule) : 'unknown' }),
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
        ),
        transports: [
            new transports.Console({
                handleExceptions: true,
                format: format.combine(
                    format.colorize(),
                    format.printf(
                        info => `${info.timestamp}\t${info.level}\t[${info.label}]: ${info.message}`
                    )
                )
            }),
        ],
        
    });
}

