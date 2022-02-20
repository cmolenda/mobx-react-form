import StateInterface, { RuntimeMode } from "./models/StateInterface";
import { observe, observable, makeObservable } from "mobx";
import _ from "lodash";

import Options from "./Options";
import Bindings from "./Bindings";

import {
  props,
  hasUnifiedProps,
  hasSeparatedProps,
  checkObserve,
  isStruct,
  $try,
} from "./utils";

import OptionsInterface from "./models/OptionsInterface";
import BindingsInterface from "./models/BindingsInterface";

export default class State implements StateInterface {
  mode = RuntimeMode.mixed;

  strict = false;

  form: any;

  options: OptionsInterface;

  bindings: BindingsInterface;

  $struct: string[] = [];

  $extra: any;

  disposers = {
    interceptor: {},
    observer: {},
  };

  initial = {
    props: {},
    fields: {},
  };

  current = {
    props: {},
    fields: {},
  };

  constructor({ form, initial, options, bindings }: any) {
    this.set("form", form);
    this.initProps(initial);
    this.options = new Options();
    this.options.set(options);
    this.bindings = new Bindings();
    this.bindings.register(bindings);
    this.observeOptions();
    makeObservable(this, {
      $extra: observable,
    });
  }

  initProps(initial: any): void {
    const initialProps: any = _.pick(initial, [
      ...props.separated,
      ...props.validation,
      ...props.function,
      ...props.handlers,
    ]);

    this.set("initial", "props", initialProps);

    const $unified = hasUnifiedProps(initial);
    const $separated = hasSeparatedProps(initial);

    if ($unified && $separated) {
      console.warn(
        // eslint-disable-line
        "WARNING: Your mobx-react-form instance ",
        this.form.name,
        " is running in MIXED Mode (Unified + Separated) as fields properties definition.",
        "This mode is experimental, use it at your own risk, or use only one mode."
      );
    }

    if (($separated || isStruct(initial.fields)) && !$unified) {
      const struct: any = $try(initial.struct || initial.fields);
      this.struct(struct);
      this.strict = true;
      this.mode = RuntimeMode.separated;
      return;
    }

    this.struct(initial.struct);
    this.mode = RuntimeMode.unified;
  }

  /**
    Get/Set Fields Structure
  */
  struct(data: string[] = []): string[] {
    if (data) this.$struct = data;
    return this.$struct;
  }

  /**
    Get Props/Fields
  */
  get(type: any, subtype: any): any {
    return _.get(this, subtype ? [type, subtype].join(".") : type);
  }

  /**
    Set Props/Fields
  */
  set(type: string, subtype: string, state: any = null): void {
    if (type === "form") {
      // subtype is the form here
      this.form = subtype;
    }

    if (type === "initial") {
      Object.assign(_.get(this.initial, subtype), state);
      Object.assign(_.get(this.current, subtype), state);
    }

    if (type === "current") {
      Object.assign(_.get(this.current, subtype), state);
    }
  }

  extra(data = null): any | null {
    if (_.isString(data)) return _.get(this.$extra, data);
    if (data === null) return this.$extra;
    this.$extra = data;
    return null;
  }

  observeOptions(): void {
    // Fix Issue #201
    observe(
      this.options.options,
      checkObserve([
        {
          // start observing fields validateOnChange
          type: "update",
          key: "validateOnChange",
          to: true,
          exec: () =>
            this.form.each((field: any) => field.observeValidationOnChange()),
        },
        {
          // stop observing fields validateOnChange
          type: "update",
          key: "validateOnChange",
          to: false,
          exec: () =>
            this.form.each((field: any) => field.disposeValidationOnChange()),
        },
        {
          // start observing fields validateOnBlur
          type: "update",
          key: "validateOnBlur",
          to: true,
          exec: () =>
            this.form.each((field: any) => field.observeValidationOnBlur()),
        },
        {
          // stop observing fields validateOnBlur
          type: "update",
          key: "validateOnBlur",
          to: false,
          exec: () =>
            this.form.each((field: any) => field.disposeValidationOnBlur()),
        },
      ])
    );
  }
}
