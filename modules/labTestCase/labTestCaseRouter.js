const express = require('express');
const router = express.Router();

const { validate } = require('./labTestCaseValidator');
const { authentication } = require('../auth/authenticationMiddleware');
const { authorization } = require('../auth/authorizationMiddleware');

const {
  labReportList,
  singleLabReport,
  createLabReport,
  deleteLabReport,
  editLabReport,
} = require('./labTestCaseService');

router.get('/', labReportList);
router.get('/:labReportId', validate('singleLabReportCase'), singleLabReport);
router.post(
  '/',
  authentication,
  authorization('Admin'),
  validate('postLabReportCase'),
  createLabReport
);
router.put('/:labReportId', editLabReport);
router.delete(
  '/:labReportId',
  validate('deleteLabReportCase'),
  deleteLabReport
);

module.exports = router;
