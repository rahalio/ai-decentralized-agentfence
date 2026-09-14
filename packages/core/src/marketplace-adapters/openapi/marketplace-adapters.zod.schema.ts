import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const registerMarketplaceAdapter_Body = z
  .object({
    name: z.string().min(1),
    marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
    webhookUrl: z.string().url().optional(),
  })
  .passthrough();
const acknowledgeHalt_Body = z
  .object({
    orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
    halted: z.boolean(),
    detail: z.string().optional(),
  })
  .passthrough();
const MarketplaceKind = z.enum(['fetch', 'singularitynet', 'internal']);
const AdapterStatus = z.enum(['active', 'degraded', 'offline']);
const MarketplaceAdapter = z
  .object({
    adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
    name: z.string(),
    marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
    status: z.enum(['active', 'degraded', 'offline']),
    webhookUrl: z.string().url().optional(),
    createdAt: z.string().datetime({ offset: true }),
    lastHaltAckAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const MarketplaceAdapterCreateRequest = z
  .object({
    name: z.string().min(1),
    marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
    webhookUrl: z.string().url().optional(),
  })
  .passthrough();
const HaltAck = z
  .object({
    adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
    orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
    halted: z.boolean(),
    acknowledgedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const HaltAckRequest = z
  .object({
    orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
    halted: z.boolean(),
    detail: z.string().optional(),
  })
  .passthrough();
const HaltAckResponse = z
  .object({
    data: z
      .object({
        adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
        orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
        halted: z.boolean(),
        acknowledgedAt: z.string().datetime({ offset: true }),
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
const PartnerAttestation = z
  .object({
    agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    attested: z.boolean(),
    enterpriseId: z.string(),
    attestationStatus: z.enum(['unverified', 'attested', 'revoked']).optional(),
    marketplaceIds: z.record(z.string()).optional(),
  })
  .passthrough();
const PartnerAttestationResponse = z
  .object({
    data: z
      .object({
        agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
        attested: z.boolean(),
        enterpriseId: z.string(),
        attestationStatus: z
          .enum(['unverified', 'attested', 'revoked'])
          .optional(),
        marketplaceIds: z.record(z.string()).optional(),
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
const MarketplaceAdapterResponse = z
  .object({
    data: z
      .object({
        adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
        name: z.string(),
        marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
        status: z.enum(['active', 'degraded', 'offline']),
        webhookUrl: z.string().url().optional(),
        createdAt: z.string().datetime({ offset: true }),
        lastHaltAckAt: z.string().datetime({ offset: true }).optional(),
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
const MarketplaceAdapterListData = z
  .object({
    items: z.array(
      z
        .object({
          adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
          name: z.string(),
          marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
          status: z.enum(['active', 'degraded', 'offline']),
          webhookUrl: z.string().url().optional(),
          createdAt: z.string().datetime({ offset: true }),
          lastHaltAckAt: z.string().datetime({ offset: true }).optional(),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const MarketplaceAdapterListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
              name: z.string(),
              marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
              status: z.enum(['active', 'degraded', 'offline']),
              webhookUrl: z.string().url().optional(),
              createdAt: z.string().datetime({ offset: true }),
              lastHaltAckAt: z.string().datetime({ offset: true }).optional(),
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
const AdapterId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const KillSwitchOrderId = z.string();
const AgentId = z.string();

export const schemas: any = {
  registerMarketplaceAdapter_Body,
  acknowledgeHalt_Body,
  MarketplaceKind,
  AdapterStatus,
  MarketplaceAdapter,
  MarketplaceAdapterCreateRequest,
  HaltAck,
  HaltAckRequest,
  HaltAckResponse,
  PartnerAttestation,
  PartnerAttestationResponse,
  MarketplaceAdapterResponse,
  MarketplaceAdapterListData,
  MarketplaceAdapterListResponse,
  Problem,
  AdapterId,
  ResponseMeta,
  KillSwitchOrderId,
  AgentId,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/marketplace-adapters',
    alias: 'listMarketplaceAdapters',
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
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
                  name: z.string(),
                  marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
                  status: z.enum(['active', 'degraded', 'offline']),
                  webhookUrl: z.string().url().optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  lastHaltAckAt: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
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
    path: '/v1/marketplace-adapters',
    alias: 'registerMarketplaceAdapter',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: registerMarketplaceAdapter_Body,
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
            adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string(),
            marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
            status: z.enum(['active', 'degraded', 'offline']),
            webhookUrl: z.string().url().optional(),
            createdAt: z.string().datetime({ offset: true }),
            lastHaltAckAt: z.string().datetime({ offset: true }).optional(),
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
    ],
  },
  {
    method: 'get',
    path: '/v1/marketplace-adapters/:adapterId',
    alias: 'getMarketplaceAdapter',
    requestFormat: 'json',
    parameters: [
      {
        name: 'adapterId',
        type: 'Path',
        schema: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string(),
            marketplace: z.enum(['fetch', 'singularitynet', 'internal']),
            status: z.enum(['active', 'degraded', 'offline']),
            webhookUrl: z.string().url().optional(),
            createdAt: z.string().datetime({ offset: true }),
            lastHaltAckAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/marketplace-adapters/:adapterId/halt-ack',
    alias: 'acknowledgeHalt',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: acknowledgeHalt_Body,
      },
      {
        name: 'adapterId',
        type: 'Path',
        schema: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
            orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
            halted: z.boolean(),
            acknowledgedAt: z.string().datetime({ offset: true }),
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
    method: 'get',
    path: '/v1/partner-attestations/:agentId',
    alias: 'verifyPartnerAttestation',
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
            attested: z.boolean(),
            enterpriseId: z.string(),
            attestationStatus: z
              .enum(['unverified', 'attested', 'revoked'])
              .optional(),
            marketplaceIds: z.record(z.string()).optional(),
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
]);

export const api: any = new Zodios('https://api.agentfence.local/v1', endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
