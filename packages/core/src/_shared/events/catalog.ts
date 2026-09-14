/**
 * Integration event type catalog — identity starter.
 * Extend in consumer repos when adding product domains.
 */

import { z } from 'zod';

export const IntegrationEventTypes = {
  IDENTITY_API_KEY_CREATED: 'identity.api-key.created',
  IDENTITY_API_KEY_REVOKED: 'identity.api-key.revoked',
  IDENTITY_USER_CREATED: 'identity.user.created',
  IDENTITY_USER_DISABLED: 'identity.user.disabled',
  AGENT_REGISTERED: 'agents.agent.registered',
  AGENT_SUSPENDED: 'agents.agent.suspended',
  POLICY_PUBLISHED: 'policies.policy.published',
  ACTION_ALLOWED: 'policies.action.allowed',
  ACTION_DENIED: 'policies.action.denied',
  AUDIT_EVENT_APPENDED: 'audits.event.appended',
  KILL_SWITCH_INVOKED: 'kill-switch.order.invoked',
  ADD_ON_APPROVED: 'add-ons.package.approved',
  DELEGATION_CREATED: 'delegations.edge.created',
  INCIDENT_CREATED: 'incidents.incident.created',
  INCIDENT_CLOSED: 'incidents.incident.closed',
} as const;

export type IntegrationEventType =
  (typeof IntegrationEventTypes)[keyof typeof IntegrationEventTypes];

export const ApiKeyCreatedPayloadSchema = z.object({
  keyId: z.string().min(1),
  tenantId: z.string().min(1),
});

export type ApiKeyCreatedPayload = z.infer<typeof ApiKeyCreatedPayloadSchema>;
