/**
 * IdGeneratorService Port — starter prefixes (extend in consumer repos).
 */

import type { DomainCode } from '@agentfence/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  agtId(): string;
  polId(): string;
  audId(): string;
  kswId(): string;
  adoId(): string;
  dlgId(): string;
  incId(): string;
  rptId(): string;
  mktId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
