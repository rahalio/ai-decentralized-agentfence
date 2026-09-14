/**
 * ID Generator Service Implementation — starter prefixes.
 */

import type { DomainCode } from '@agentfence/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP, isValidDomainId } from '@agentfence/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@agentfence/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters.`
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  if (!isValidDomainId(id)) {
    throw new Error(`Generated ID "${id}" failed validation.`);
  }
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  agtId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.agent);
  }
  polId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.policy);
  }
  audId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.audit);
  }
  kswId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.killSwitch);
  }
  adoId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.addOn);
  }
  dlgId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.delegation);
  }
  incId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.incident);
  }
  rptId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.report);
  }
  mktId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.marketplaceAdapter);
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
