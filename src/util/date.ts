/* eslint-disable import/no-anonymous-default-export */
import { Moment, utc } from 'moment';
import 'moment-timezone';

export function MomentSpeed(date?: string | Moment) {
  if (!date) {
    return utc().locale('pt-br').tz('America/Sao_Paulo');
  }

  return utc(date).locale('pt-br').tz('America/Sao_Paulo');
}

export function FormatDate(format: string, date: string | Moment) {
  return MomentSpeed(date).format(format);
}

export function MomentTzString(date: string | Moment) {
  return MomentSpeed(date).locale('pt-br').tz('America/Sao_Paulo').format();
}

export function TransformDateUsa(date: string, hour = '') {
  const [day, mounth, year] = date.split('/');

  const [hours, minutes] = hour.split(':');

  const dateString = `${year}-${mounth}-${day}`;

  const response = MomentSpeed(dateString.trim())
    .hours(Number(hours) || 0)
    .minutes(Number(minutes) || 0)
    .seconds(0);

  return response;
}

export function TransformDateUsaString(date: string, hour = '') {
  const dateGenerated = TransformDateUsa(date, hour);

  return String(dateGenerated.format());
}

export function SetZeroDate(date: string | Moment) {
  return MomentSpeed(date).hours(0).minutes(0).seconds(0);
}

export function IsBetween(
  date: Moment,
  initialDate: string,
  finalDate: string
) {
  return date.isBetween(initialDate, finalDate, undefined, '[]');
}

export default {
  MomentSpeed,
  FormatDate,
  MomentTzString,
  TransformDateUsa,
  TransformDateUsaString,
  SetZeroDate,
  IsBetween,
};
