export const STRING_CONDITIONS = ['ne', 'eq', 'le', 'lt', 'ge', 'gt', 'contains', 'notContains', 'between', 'beginsWith'];
export const ID_CONDITIONS = ['ne', 'eq', 'le', 'lt', 'ge', 'gt', 'contains', 'notContains', 'between', 'beginsWith'];
export const INT_CONDITIONS = ['ne', 'eq', 'le', 'lt', 'ge', 'gt', 'between'];
export const FLOAT_CONDITIONS = ['ne', 'eq', 'le', 'lt', 'ge', 'gt', 'between'];
export const BOOLEAN_CONDITIONS = ['ne', 'eq'];
export const SIZE_CONDITIONS = ['ne', 'eq', 'le', 'lt', 'ge', 'gt', 'between'];

export const SUBSCRIPTION_STRING_CONDITIONS = [
  'ne',
  'eq',
  'le',
  'lt',
  'ge',
  'gt',
  'contains',
  'notContains',
  'between',
  'beginsWith',
  'in',
  'notIn',
];
export const SUBSCRIPTION_ID_CONDITIONS = [
  'ne',
  'eq',
  'le',
  'lt',
  'ge',
  'gt',
  'contains',
  'notContains',
  'between',
  'beginsWith',
  'in',
  'notIn',
];
export const SUBSCRIPTION_INT_CONDITIONS = ['ne', 'eq', 'le', 'lt', 'ge', 'gt', 'between', 'in', 'notIn'];
export const SUBSCRIPTION_FLOAT_CONDITIONS = ['ne', 'eq', 'le', 'lt', 'ge', 'gt', 'between', 'in', 'notIn'];
export const SUBSCRIPTION_BOOLEAN_CONDITIONS = ['ne', 'eq'];

export const STRING_FUNCTIONS = new Set<string>(['attributeExists', 'attributeType', 'size']);
export const ID_FUNCTIONS = new Set<string>(['attributeExists', 'attributeType', 'size']);
export const INT_FUNCTIONS = new Set<string>(['attributeExists', 'attributeType']);
export const FLOAT_FUNCTIONS = new Set<string>(['attributeExists', 'attributeType']);
export const BOOLEAN_FUNCTIONS = new Set<string>(['attributeExists', 'attributeType']);

export const ATTRIBUTE_TYPES = ['binary', 'binarySet', 'bool', 'list', 'map', 'number', 'numberSet', 'string', 'stringSet', '_null'];

export const OPERATION_KEY = '__operation';

export const API_KEY_DIRECTIVE = 'aws_api_key';

export const AWS_IAM_DIRECTIVE = 'aws_iam';
