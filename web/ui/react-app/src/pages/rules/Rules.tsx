import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import PathPrefixProps from '../../types/PathPrefixProps';
import { useFetch } from '../../hooks/useFetch';
import { withStatusIndicator } from '../../components/withStatusIndicator';
import { RulesMap, RulesContent } from './RulesContent';

const RulesWithStatusIndicator = withStatusIndicator(RulesContent);

const Rules: FC<RouteComponentProps & PathPrefixProps> = ({ pathPrefix, apiPath }) => {
  const { response, error, isLoading } = useFetch<RulesMap>(`${pathPrefix}/${apiPath}/rules`);

  return <RulesWithStatusIndicator response={response} error={error} isLoading={isLoading} />;
};

export default Rules;
