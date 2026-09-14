import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const invokeKillSwitch_Body = z
  .object({
    rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    rationale: z.string().min(1),
    includeSubAgents: z.boolean().optional().default(true),
    requireDualControl: z.boolean().optional().default(true),
  })
  .passthrough();
const recordKillSwitchAck_Body = z
  .object({
    adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
    halted: z.boolean(),
    detail: z.string().optional(),
  })
  .passthrough();
const KillSwitchStatus = z.enum([
  'draft',
  'armed',
  'propagating',
  'completed',
  'failed',
  'partial',
]);
const KillSwitchOrder = z
  .object({
    orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
    rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    status: z.enum([
      'draft',
      'armed',
      'propagating',
      'completed',
      'failed',
      'partial',
    ]),
    includeSubAgents: z.boolean(),
    rationale: z.string().optional(),
    armedBy: z.string().optional(),
    executedBy: z.string().optional(),
    slaDeadlineAt: z.string().datetime({ offset: true }).optional(),
    ackCount: z.number().int().optional(),
    invokedAt: z.string().datetime({ offset: true }),
    completedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const KillSwitchOrderCreateRequest = z
  .object({
    rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    rationale: z.string().min(1),
    includeSubAgents: z.boolean().optional().default(true),
    requireDualControl: z.boolean().optional().default(true),
  })
  .passthrough();
const KillSwitchArmRequest = z
  .object({ approverId: z.string().min(1) })
  .passthrough();
const KillSwitchAckRequest = z
  .object({
    adapterId: z.string().regex(/^mkt_[0-9A-HJKMNP-TV-Z]{26}$/),
    halted: z.boolean(),
    detail: z.string().optional(),
  })
  .passthrough();
const KillSwitchBlastRadius = z
  .object({
    rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    agentIds: z.array(z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)),
    pendingTxCount: z.number().int(),
    depth: z.number().int().optional(),
  })
  .passthrough();
const KillSwitchBlastRadiusResponse = z
  .object({
    data: z
      .object({
        rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
        agentIds: z.array(z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)),
        pendingTxCount: z.number().int(),
        depth: z.number().int().optional(),
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
const KillSwitchOrderResponse = z
  .object({
    data: z
      .object({
        orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
        rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
        status: z.enum([
          'draft',
          'armed',
          'propagating',
          'completed',
          'failed',
          'partial',
        ]),
        includeSubAgents: z.boolean(),
        rationale: z.string().optional(),
        armedBy: z.string().optional(),
        executedBy: z.string().optional(),
        slaDeadlineAt: z.string().datetime({ offset: true }).optional(),
        ackCount: z.number().int().optional(),
        invokedAt: z.string().datetime({ offset: true }),
        completedAt: z.string().datetime({ offset: true }).optional(),
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
const KillSwitchOrderListData = z
  .object({
    items: z.array(
      z
        .object({
          orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
          rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
          status: z.enum([
            'draft',
            'armed',
            'propagating',
            'completed',
            'failed',
            'partial',
          ]),
          includeSubAgents: z.boolean(),
          rationale: z.string().optional(),
          armedBy: z.string().optional(),
          executedBy: z.string().optional(),
          slaDeadlineAt: z.string().datetime({ offset: true }).optional(),
          ackCount: z.number().int().optional(),
          invokedAt: z.string().datetime({ offset: true }),
          completedAt: z.string().datetime({ offset: true }).optional(),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const KillSwitchOrderListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
              rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
              status: z.enum([
                'draft',
                'armed',
                'propagating',
                'completed',
                'failed',
                'partial',
              ]),
              includeSubAgents: z.boolean(),
              rationale: z.string().optional(),
              armedBy: z.string().optional(),
              executedBy: z.string().optional(),
              slaDeadlineAt: z.string().datetime({ offset: true }).optional(),
              ackCount: z.number().int().optional(),
              invokedAt: z.string().datetime({ offset: true }),
              completedAt: z.string().datetime({ offset: true }).optional(),
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
const KillSwitchOrderId = z.string();
const AgentId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const AdapterId = z.string();

export const schemas: any = {
  invokeKillSwitch_Body,
  recordKillSwitchAck_Body,
  KillSwitchStatus,
  KillSwitchOrder,
  KillSwitchOrderCreateRequest,
  KillSwitchArmRequest,
  KillSwitchAckRequest,
  KillSwitchBlastRadius,
  KillSwitchBlastRadiusResponse,
  KillSwitchOrderResponse,
  KillSwitchOrderListData,
  KillSwitchOrderListResponse,
  Problem,
  KillSwitchOrderId,
  AgentId,
  ResponseMeta,
  AdapterId,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/kill-switch/orders',
    alias: 'listKillSwitchOrders',
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
                  orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
                  rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
                  status: z.enum([
                    'draft',
                    'armed',
                    'propagating',
                    'completed',
                    'failed',
                    'partial',
                  ]),
                  includeSubAgents: z.boolean(),
                  rationale: z.string().optional(),
                  armedBy: z.string().optional(),
                  executedBy: z.string().optional(),
                  slaDeadlineAt: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
                  ackCount: z.number().int().optional(),
                  invokedAt: z.string().datetime({ offset: true }),
                  completedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/kill-switch/orders',
    alias: 'invokeKillSwitch',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: invokeKillSwitch_Body,
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
            orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
            rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum([
              'draft',
              'armed',
              'propagating',
              'completed',
              'failed',
              'partial',
            ]),
            includeSubAgents: z.boolean(),
            rationale: z.string().optional(),
            armedBy: z.string().optional(),
            executedBy: z.string().optional(),
            slaDeadlineAt: z.string().datetime({ offset: true }).optional(),
            ackCount: z.number().int().optional(),
            invokedAt: z.string().datetime({ offset: true }),
            completedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/kill-switch/orders/:orderId',
    alias: 'getKillSwitchOrder',
    requestFormat: 'json',
    parameters: [
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
            rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum([
              'draft',
              'armed',
              'propagating',
              'completed',
              'failed',
              'partial',
            ]),
            includeSubAgents: z.boolean(),
            rationale: z.string().optional(),
            armedBy: z.string().optional(),
            executedBy: z.string().optional(),
            slaDeadlineAt: z.string().datetime({ offset: true }).optional(),
            ackCount: z.number().int().optional(),
            invokedAt: z.string().datetime({ offset: true }),
            completedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/kill-switch/orders/:orderId/acks',
    alias: 'recordKillSwitchAck',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: recordKillSwitchAck_Body,
      },
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
            rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum([
              'draft',
              'armed',
              'propagating',
              'completed',
              'failed',
              'partial',
            ]),
            includeSubAgents: z.boolean(),
            rationale: z.string().optional(),
            armedBy: z.string().optional(),
            executedBy: z.string().optional(),
            slaDeadlineAt: z.string().datetime({ offset: true }).optional(),
            ackCount: z.number().int().optional(),
            invokedAt: z.string().datetime({ offset: true }),
            completedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/kill-switch/orders/:orderId/arm',
    alias: 'armKillSwitch',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ approverId: z.string().min(1) }).passthrough(),
      },
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            orderId: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
            rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum([
              'draft',
              'armed',
              'propagating',
              'completed',
              'failed',
              'partial',
            ]),
            includeSubAgents: z.boolean(),
            rationale: z.string().optional(),
            armedBy: z.string().optional(),
            executedBy: z.string().optional(),
            slaDeadlineAt: z.string().datetime({ offset: true }).optional(),
            ackCount: z.number().int().optional(),
            invokedAt: z.string().datetime({ offset: true }),
            completedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/kill-switch/orders/:orderId/blast-radius',
    alias: 'getKillSwitchBlastRadius',
    requestFormat: 'json',
    parameters: [
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            agentIds: z.array(z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)),
            pendingTxCount: z.number().int(),
            depth: z.number().int().optional(),
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
