export enum FieldPropsEnum {
  key = "key",
  id = "id",
  path = "path",
  name = "name",
  fields = "fields",
  ref= "ref",
  type = "type",
  value = "value",
  initial = "initial",
  default = "default",
  checked = "checked",
  label = "label",
  placeholder = "placeholder",
  error = "error",
  validatedWith = "validatedWith",
  validators = "validators",
  rules = "rules",
  related = "related",
  options = "options",
  extra = "extra",
  bindings = "bindings",
  hooks = "hooks",
  handlers = "handlers",
  input="input",
  output="output",
  interceptors = "interceptors",
  observers = "observers",
  // computed
  disabled = "disabled",
  deleted = "deleted",
  blurred = "blurred",
  validating = "validating",
  submitting = "submitting",
  clearing = "clearing",
  resetting = "resetting",
  changed = "changed",
  touched = "touched",
  focused = "focused",
  isEmpty = "isEmpty",
  isDefault = "isDefault",
  isPristine = "isPristine",
  isDirty = "isDirty",
  isValid = "isValid",
  hasError = "hasError",
  // handlers
  onInit = "onInit",
  onSync = "onSync",
  onChange = "onChange",
  onBlur = "onBlur",
  onFocus = "onFocus",
  onToggle = "onToggle",
  onDrop = "onDrop",
  onSubmit = "onSubmit",
  onReset = "onReset",
  onClear = "onClear",
  onAdd = "onAdd",
  onDel = "onDel",
  autoFocus = "autoFocus",
  inputMode = "inputMode",
  onKeyDown = "onKeyDown",
  onKeyUp = 'onKeyUp',
}

export type FieldPropsType = {
  [key in FieldPropsEnum]?: any;
}

export enum AllowedFieldPropsTypes {
  computed = 'computed',
  observable = 'observable',
  editable = 'editable',
  all = 'all',
}

export enum FieldPropsOccurrence {
  some = 'some',
  every = 'every',
}

export enum SeparatedPropsMode {
  values = 'values',
  labels = 'labels',
  placeholders = 'placeholders',
  defaults = 'defaults',
  initials = 'initials',
  disabled = 'disabled',
  deleted = 'deleted',
  types = 'types',
  related = 'related',
  rules = 'rules',
  options = 'options',
  bindings = 'bindings',
  extra = 'extra',
  hooks = 'hooks',
  handlers = 'handlers',
  validatedWith = 'validatedWith',
  validators = 'validators',
  observers = 'observers',
  interceptors = 'interceptors',
  input = 'input',
  output = 'output',
  autoFocus = 'autoFocus',
  inputMode = 'inputMode',
  refs = 'refs',
}