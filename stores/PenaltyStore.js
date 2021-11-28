import { makeAutoObservable } from "mobx";

export default class PenaltyStore {
  constructor() {
    this._fetchStatus = "";
    this._penaltyId = "";
    this._penalty = null;
    makeAutoObservable(this);
  }
  get fetchStatus() {
    return this._fetchStatus;
  }
  set fetchStatus(value) {
    this._fetchStatus = value;
  }
  get penaltyId() {
    return this._penaltyId;
  }
  set penaltyId(value) {
    this._penaltyId = value;
  }
  get penalty() {
    return this._penalty;
  }
  set penalty(value) {
    this._penalty = value;
  }
}
