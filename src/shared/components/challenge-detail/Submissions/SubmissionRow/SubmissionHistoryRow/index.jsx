/* eslint jsx-a11y/no-static-element-interactions:0 */
/**
 * SubmissionHistoryRow component.
 */

import React from 'react';
import PT from 'prop-types';
import moment from 'moment';

import './style.scss';

export default function SubmissionHistoryRow({
  isMM,
  submission,
  finalScore,
  initialScore,
  submissionTime,
}) {
  return (
    <div styleName="container">
      <div styleName="row no-border">
        { isMM ? <div styleName="col-1 col child" /> : null }
        <div styleName="col-2 col child">
          {submission}
        </div>
        <div styleName="col-3 col">
          <div styleName="col child">
            {(isMM || (!finalScore && finalScore !== 0)) ? '-' : finalScore}
          </div>
          <div styleName="col child">
            {(!initialScore && initialScore !== 0) ? '-' : initialScore}
          </div>
        </div>
        <div styleName="col-4 col history-time">
          <div styleName="col child">
            {moment(submissionTime).format('DD MMM YYYY')} {moment(submissionTime).format('HH:mm:ss')}
          </div>
        </div>
      </div>
    </div>
  );
}

SubmissionHistoryRow.defaultProps = {
  finalScore: null,
  initialScore: null,
};

SubmissionHistoryRow.propTypes = {
  isMM: PT.bool.isRequired,
  submission: PT.number.isRequired,
  finalScore: PT.number,
  initialScore: PT.number,
  submissionTime: PT.string.isRequired,
};
