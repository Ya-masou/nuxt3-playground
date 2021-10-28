import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type City = {
  __typename?: 'City';
  coord?: Maybe<Coordinates>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  weather?: Maybe<Weather>;
};

export type Clouds = {
  __typename?: 'Clouds';
  all?: Maybe<Scalars['Int']>;
  humidity?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
};

export type ConfigInput = {
  lang?: Maybe<Language>;
  units?: Maybe<Unit>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export enum Language {
  Af = 'af',
  Al = 'al',
  Ar = 'ar',
  Az = 'az',
  Bg = 'bg',
  Ca = 'ca',
  Cz = 'cz',
  Da = 'da',
  De = 'de',
  El = 'el',
  En = 'en',
  Es = 'es',
  Eu = 'eu',
  Fa = 'fa',
  Fi = 'fi',
  Fr = 'fr',
  Gl = 'gl',
  He = 'he',
  Hi = 'hi',
  Hr = 'hr',
  Hu = 'hu',
  Id = 'id',
  It = 'it',
  Ja = 'ja',
  Kr = 'kr',
  La = 'la',
  Lt = 'lt',
  Mk = 'mk',
  Nl = 'nl',
  No = 'no',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt_br',
  Ro = 'ro',
  Ru = 'ru',
  Se = 'se',
  Sk = 'sk',
  Sl = 'sl',
  Sp = 'sp',
  Sr = 'sr',
  Sv = 'sv',
  Th = 'th',
  Tr = 'tr',
  Ua = 'ua',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_cn',
  ZhTw = 'zh_tw',
  Zu = 'zu'
}

export type Query = {
  __typename?: 'Query';
  getCityById?: Maybe<Array<Maybe<City>>>;
  getCityByName?: Maybe<City>;
};


export type QueryGetCityByIdArgs = {
  config?: Maybe<ConfigInput>;
  id?: Maybe<Array<Scalars['String']>>;
};


export type QueryGetCityByNameArgs = {
  config?: Maybe<ConfigInput>;
  country?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Summary = {
  __typename?: 'Summary';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Temperature = {
  __typename?: 'Temperature';
  actual?: Maybe<Scalars['Float']>;
  feelsLike?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

export enum Unit {
  Imperial = 'imperial',
  Kelvin = 'kelvin',
  Metric = 'metric'
}

export type Weather = {
  __typename?: 'Weather';
  clouds?: Maybe<Clouds>;
  summary?: Maybe<Summary>;
  temperature?: Maybe<Temperature>;
  timestamp?: Maybe<Scalars['Int']>;
  wind?: Maybe<Wind>;
};

export type Wind = {
  __typename?: 'Wind';
  deg?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Float']>;
};

export type GetCityByNameQueryVariables = Exact<{
  name: Scalars['String'];
  config?: Maybe<ConfigInput>;
}>;


export type GetCityByNameQuery = { __typename?: 'Query', getCityByName?: { __typename?: 'City', id?: string | null | undefined, name?: string | null | undefined, country?: string | null | undefined, weather?: { __typename?: 'Weather', summary?: { __typename?: 'Summary', title?: string | null | undefined, description?: string | null | undefined } | null | undefined, temperature?: { __typename?: 'Temperature', actual?: number | null | undefined, feelsLike?: number | null | undefined, min?: number | null | undefined, max?: number | null | undefined } | null | undefined, wind?: { __typename?: 'Wind', speed?: number | null | undefined, deg?: number | null | undefined } | null | undefined, clouds?: { __typename?: 'Clouds', all?: number | null | undefined, visibility?: number | null | undefined, humidity?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined };


export const GetCityByNameDocument = gql`
    query GetCityByName($name: String!, $config: ConfigInput) {
  getCityByName(name: $name, config: $config) {
    id
    name
    country
    weather {
      summary {
        title
        description
      }
      temperature {
        actual
        feelsLike
        min
        max
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
    }
  }
}
    `;

export function useGetCityByNameQuery(options: Omit<Urql.UseQueryArgs<never, GetCityByNameQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCityByNameQuery>({ query: GetCityByNameDocument, ...options });
};