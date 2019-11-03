const fs = require('fs');

const GetResume = () => {
    const resumeString = fs.readFile('../mrkdwn/resume.js', 'utf8');
    return resumeString
}

module.exports = {
    GetResume : GetResume
}