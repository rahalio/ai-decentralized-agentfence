import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createDelegationEdge_Body = z
  .object({
    parentAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    childAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
  })
  .passthrough();
const DelegationEdge = z
  .object({
    delegationId: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
    parentAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    childAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    depth: z.number().int().gte(1),
    inheritedSpendCap: z.number().optional(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const DelegationEdgeCreateRequest = z
  .object({
    parentAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    childAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
  })
  .passthrough();
const DelegationGraphNode = z
  .object({
    agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    parentAgentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    depth: z.number().int(),
  })
  .passthrough();
const DelegationGraph = z
  .object({
    rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
    nodes: z.array(
      z
        .object({
          agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
          parentAgentId: z
            .string()
            .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          depth: z.number().int(),
        })
        .passthrough()
    ),
    aggregatedSpend: z.number().optional(),
  })
  .passthrough();
const DelegationGraphResponse = z
  .object({
    data: z
      .object({
        rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
        nodes: z.array(
          z
            .object({
              agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
              parentAgentId: z
                .string()
                .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              depth: z.number().int(),
            })
            .passthrough()
        ),
        aggregatedSpend: z.number().optional(),
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
const DelegationInheritance = z
  .object({
    delegationId: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
    maxSpendPerDay: z.number(),
    maxSubAgentDepth: z.number().int(),
    allowedTools: z.array(z.string()).optional(),
    auditContextAgentIds: z
      .array(z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/))
      .optional(),
  })
  .passthrough();
const DelegationInheritanceResponse = z
  .object({
    data: z
      .object({
        delegationId: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
        maxSpendPerDay: z.number(),
        maxSubAgentDepth: z.number().int(),
        allowedTools: z.array(z.string()).optional(),
        auditContextAgentIds: z
          .array(z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/))
          .optional(),
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
const DelegationEdgeResponse = z
  .object({
    data: z
      .object({
        delegationId: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
        parentAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
        childAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
        depth: z.number().int().gte(1),
        inheritedSpendCap: z.number().optional(),
        createdAt: z.string().datetime({ offset: true }),
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
const DelegationEdgeListData = z
  .object({
    items: z.array(
      z
        .object({
          delegationId: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
          parentAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
          childAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
          depth: z.number().int().gte(1),
          inheritedSpendCap: z.number().optional(),
          createdAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const DelegationEdgeListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              delegationId: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
              parentAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
              childAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
              depth: z.number().int().gte(1),
              inheritedSpendCap: z.number().optional(),
              createdAt: z.string().datetime({ offset: true }),
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
const AgentId = z.string();
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
const DelegationId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  createDelegationEdge_Body,
  DelegationEdge,
  DelegationEdgeCreateRequest,
  DelegationGraphNode,
  DelegationGraph,
  DelegationGraphResponse,
  DelegationInheritance,
  DelegationInheritanceResponse,
  DelegationEdgeResponse,
  DelegationEdgeListData,
  DelegationEdgeListResponse,
  AgentId,
  Problem,
  DelegationId,
  ResponseMeta,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/delegations',
    alias: 'listDelegationEdges',
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
        name: 'parentAgentId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  delegationId: z
                    .string()
                    .regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
                  parentAgentId: z
                    .string()
                    .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
                  childAgentId: z
                    .string()
                    .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
                  depth: z.number().int().gte(1),
                  inheritedSpendCap: z.number().optional(),
                  createdAt: z.string().datetime({ offset: true }),
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
    path: '/v1/delegations',
    alias: 'createDelegationEdge',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createDelegationEdge_Body,
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
            delegationId: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
            parentAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            childAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            depth: z.number().int().gte(1),
            inheritedSpendCap: z.number().optional(),
            createdAt: z.string().datetime({ offset: true }),
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
    path: '/v1/delegations/:delegationId',
    alias: 'getDelegationEdge',
    requestFormat: 'json',
    parameters: [
      {
        name: 'delegationId',
        type: 'Path',
        schema: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            delegationId: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
            parentAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            childAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            depth: z.number().int().gte(1),
            inheritedSpendCap: z.number().optional(),
            createdAt: z.string().datetime({ offset: true }),
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
    path: '/v1/delegations/:delegationId/inheritance',
    alias: 'getDelegationInheritance',
    requestFormat: 'json',
    parameters: [
      {
        name: 'delegationId',
        type: 'Path',
        schema: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            delegationId: z.string().regex(/^dlg_[0-9A-HJKMNP-TV-Z]{26}$/),
            maxSpendPerDay: z.number(),
            maxSubAgentDepth: z.number().int(),
            allowedTools: z.array(z.string()).optional(),
            auditContextAgentIds: z
              .array(z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/))
              .optional(),
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
    path: '/v1/delegations/graph',
    alias: 'getDelegationGraph',
    requestFormat: 'json',
    parameters: [
      {
        name: 'rootAgentId',
        type: 'Query',
        schema: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            rootAgentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
            nodes: z.array(
              z
                .object({
                  agentId: z.string().regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/),
                  parentAgentId: z
                    .string()
                    .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  depth: z.number().int(),
                })
                .passthrough()
            ),
            aggregatedSpend: z.number().optional(),
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
]);

export const api: any = new Zodios('https://api.agentfence.local/v1', endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
