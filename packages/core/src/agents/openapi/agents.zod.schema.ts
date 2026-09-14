import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const registerAgent_Body = z
  .object({
    enterpriseId: z.string().min(1),
    runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
    parentAgentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    marketplaceExternalId: z.string().optional(),
    marketplace: z.enum(['fetch', 'singularitynet', 'internal']).optional(),
  })
  .passthrough();
const updateAgent_Body = z
  .object({
    enterpriseId: z.string().min(1),
    attestationStatus: z.enum(['unverified', 'attested', 'revoked']),
  })
  .partial()
  .passthrough();
const mapAgentMarketplaceIds_Body = z
  .object({
    marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
    externalId: z.string().min(1),
  })
  .passthrough();
const RuntimeType = z.enum(['fetch_aea', 'singularitynet', 'internal']);
const AgentStatus = z.enum(['active', 'suspended', 'killed']);
const AgentIdentity = z
  .object({
    agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    enterpriseId: z.string().min(1),
    runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
    status: z.enum(['active', 'suspended', 'killed']),
    marketplaceIds: z.record(z.string()).optional(),
    parentAgentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    attestationStatus: z.enum(['unverified', 'attested', 'revoked']).optional(),
    credentialRotatedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AgentRegisterRequest = z
  .object({
    enterpriseId: z.string().min(1),
    runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
    parentAgentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    marketplaceExternalId: z.string().optional(),
    marketplace: z.enum(['fetch', 'singularitynet', 'internal']).optional(),
  })
  .passthrough();
const AgentUpdateRequest = z
  .object({
    enterpriseId: z.string().min(1),
    attestationStatus: z.enum(['unverified', 'attested', 'revoked']),
  })
  .partial()
  .passthrough();
const AgentMarketplaceMapRequest = z
  .object({
    marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
    externalId: z.string().min(1),
  })
  .passthrough();
const AgentSuspendRequest = z
  .object({ rationale: z.string().min(1).max(2000) })
  .passthrough();
const AgentCredentialRotation = z
  .object({
    agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    secret: z.string(),
    rotatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ShadowConflict = z
  .object({
    marketplace: z.string(),
    externalId: z.string(),
    conflictingAgentIds: z.array(
      z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
    ),
  })
  .passthrough();
const ShadowConflictListData = z
  .object({
    items: z.array(
      z
        .object({
          marketplace: z.string(),
          externalId: z.string(),
          conflictingAgentIds: z.array(
            z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
          ),
        })
        .passthrough()
    ),
  })
  .passthrough();
const ShadowConflictListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              marketplace: z.string(),
              externalId: z.string(),
              conflictingAgentIds: z.array(
                z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              ),
            })
            .passthrough()
        ),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const AgentCredentialRotationResponse = z
  .object({
    data: z
      .object({
        agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
        secret: z.string(),
        rotatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const AgentIdentityResponse = z
  .object({
    data: z
      .object({
        agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
        enterpriseId: z.string().min(1),
        runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
        status: z.enum(['active', 'suspended', 'killed']),
        marketplaceIds: z.record(z.string()).optional(),
        parentAgentId: z
          .string()
          .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        attestationStatus: z
          .enum(['unverified', 'attested', 'revoked'])
          .optional(),
        credentialRotatedAt: z.string().datetime({ offset: true }).optional(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const AgentIdentityListData = z
  .object({
    items: z.array(
      z
        .object({
          agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
          enterpriseId: z.string().min(1),
          runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
          status: z.enum(['active', 'suspended', 'killed']),
          marketplaceIds: z.record(z.string()).optional(),
          parentAgentId: z
            .string()
            .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          attestationStatus: z
            .enum(['unverified', 'attested', 'revoked'])
            .optional(),
          credentialRotatedAt: z.string().datetime({ offset: true }).optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const AgentIdentityListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
              enterpriseId: z.string().min(1),
              runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
              status: z.enum(['active', 'suspended', 'killed']),
              marketplaceIds: z.record(z.string()).optional(),
              parentAgentId: z
                .string()
                .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              attestationStatus: z
                .enum(['unverified', 'attested', 'revoked'])
                .optional(),
              credentialRotatedAt: z
                .string()
                .datetime({ offset: true })
                .optional(),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const AgentId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  registerAgent_Body,
  updateAgent_Body,
  mapAgentMarketplaceIds_Body,
  RuntimeType,
  AgentStatus,
  AgentIdentity,
  AgentRegisterRequest,
  AgentUpdateRequest,
  AgentMarketplaceMapRequest,
  AgentSuspendRequest,
  AgentCredentialRotation,
  ShadowConflict,
  ShadowConflictListData,
  ShadowConflictListResponse,
  AgentCredentialRotationResponse,
  AgentIdentityResponse,
  AgentIdentityListData,
  AgentIdentityListResponse,
  Problem,
  AgentId,
  ResponseMeta,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/agents',
    alias: 'listAgents',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().min(1).max(512).optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(100).optional().default(25),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['active', 'suspended', 'killed']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
                  enterpriseId: z.string().min(1),
                  runtimeType: z.enum([
                    'fetch_aea',
                    'singularitynet',
                    'internal',
                  ]),
                  status: z.enum(['active', 'suspended', 'killed']),
                  marketplaceIds: z.record(z.string()).optional(),
                  parentAgentId: z
                    .string()
                    .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  attestationStatus: z
                    .enum(['unverified', 'attested', 'revoked'])
                    .optional(),
                  credentialRotatedAt: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/agents',
    alias: 'registerAgent',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: registerAgent_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            enterpriseId: z.string().min(1),
            runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
            status: z.enum(['active', 'suspended', 'killed']),
            marketplaceIds: z.record(z.string()).optional(),
            parentAgentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            attestationStatus: z
              .enum(['unverified', 'attested', 'revoked'])
              .optional(),
            credentialRotatedAt: z
              .string()
              .datetime({ offset: true })
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 409,
        description: `Idempotency key reuse with different body, or state conflict`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/agents/:agentId',
    alias: 'getAgent',
    requestFormat: 'json',
    parameters: [
      {
        name: 'agentId',
        type: 'Path',
        schema: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            enterpriseId: z.string().min(1),
            runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
            status: z.enum(['active', 'suspended', 'killed']),
            marketplaceIds: z.record(z.string()).optional(),
            parentAgentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            attestationStatus: z
              .enum(['unverified', 'attested', 'revoked'])
              .optional(),
            credentialRotatedAt: z
              .string()
              .datetime({ offset: true })
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'patch',
    path: '/v1/agents/:agentId',
    alias: 'updateAgent',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: updateAgent_Body,
      },
      {
        name: 'agentId',
        type: 'Path',
        schema: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            enterpriseId: z.string().min(1),
            runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
            status: z.enum(['active', 'suspended', 'killed']),
            marketplaceIds: z.record(z.string()).optional(),
            parentAgentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            attestationStatus: z
              .enum(['unverified', 'attested', 'revoked'])
              .optional(),
            credentialRotatedAt: z
              .string()
              .datetime({ offset: true })
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/agents/:agentId/marketplace-ids',
    alias: 'mapAgentMarketplaceIds',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: mapAgentMarketplaceIds_Body,
      },
      {
        name: 'agentId',
        type: 'Path',
        schema: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            enterpriseId: z.string().min(1),
            runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
            status: z.enum(['active', 'suspended', 'killed']),
            marketplaceIds: z.record(z.string()).optional(),
            parentAgentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            attestationStatus: z
              .enum(['unverified', 'attested', 'revoked'])
              .optional(),
            credentialRotatedAt: z
              .string()
              .datetime({ offset: true })
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 409,
        description: `Idempotency key reuse with different body, or state conflict`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/agents/:agentId/rotate-credentials',
    alias: 'rotateAgentCredentials',
    requestFormat: 'json',
    parameters: [
      {
        name: 'agentId',
        type: 'Path',
        schema: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            secret: z.string(),
            rotatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/agents/:agentId/suspend',
    alias: 'suspendAgent',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({ rationale: z.string().min(1).max(2000) })
          .passthrough(),
      },
      {
        name: 'agentId',
        type: 'Path',
        schema: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            enterpriseId: z.string().min(1),
            runtimeType: z.enum(['fetch_aea', 'singularitynet', 'internal']),
            status: z.enum(['active', 'suspended', 'killed']),
            marketplaceIds: z.record(z.string()).optional(),
            parentAgentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            attestationStatus: z
              .enum(['unverified', 'attested', 'revoked'])
              .optional(),
            credentialRotatedAt: z
              .string()
              .datetime({ offset: true })
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/agents/shadow-conflicts',
    alias: 'listShadowAgentConflicts',
    requestFormat: 'json',
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  marketplace: z.string(),
                  externalId: z.string(),
                  conflictingAgentIds: z.array(
                    z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
                  ),
                })
                .passthrough()
            ),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios('https://api.agentfence.local/v1', endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
