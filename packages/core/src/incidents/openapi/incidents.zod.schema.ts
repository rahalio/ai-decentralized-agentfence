import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createIncident_Body = z
  .object({
    title: z.string().min(1),
    rootAgentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    killSwitchOrderId: z
      .string()
      .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    auditEventIds: z
      .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
      .optional(),
  })
  .passthrough();
const attachIncidentPostMortem_Body = z
  .object({
    postMortem: z.string().min(1),
    notifyMarketplaceSuspension: z.boolean().optional().default(false),
  })
  .passthrough();
const IncidentStatus = z.enum(['open', 'investigating', 'closed']);
const Incident = z
  .object({
    incidentId: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
    title: z.string(),
    status: z.enum(['open', 'investigating', 'closed']),
    rootAgentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    killSwitchOrderId: z
      .string()
      .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    auditEventIds: z
      .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
      .optional(),
    postMortem: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    closedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const IncidentCreateRequest = z
  .object({
    title: z.string().min(1),
    rootAgentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    killSwitchOrderId: z
      .string()
      .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    auditEventIds: z
      .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
      .optional(),
  })
  .passthrough();
const IncidentCloseRequest = z
  .object({ summary: z.string().min(1) })
  .passthrough();
const IncidentPostMortemRequest = z
  .object({
    postMortem: z.string().min(1),
    notifyMarketplaceSuspension: z.boolean().optional().default(false),
  })
  .passthrough();
const IncidentResponse = z
  .object({
    data: z
      .object({
        incidentId: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
        title: z.string(),
        status: z.enum(['open', 'investigating', 'closed']),
        rootAgentId: z
          .string()
          .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        killSwitchOrderId: z
          .string()
          .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        auditEventIds: z
          .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
          .optional(),
        postMortem: z.string().optional(),
        createdAt: z.string().datetime({ offset: true }),
        closedAt: z.string().datetime({ offset: true }).optional(),
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
const IncidentListData = z
  .object({
    items: z.array(
      z
        .object({
          incidentId: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
          title: z.string(),
          status: z.enum(['open', 'investigating', 'closed']),
          rootAgentId: z
            .string()
            .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          killSwitchOrderId: z
            .string()
            .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          auditEventIds: z
            .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
            .optional(),
          postMortem: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
          closedAt: z.string().datetime({ offset: true }).optional(),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const IncidentListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              incidentId: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
              title: z.string(),
              status: z.enum(['open', 'investigating', 'closed']),
              rootAgentId: z
                .string()
                .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              killSwitchOrderId: z
                .string()
                .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              auditEventIds: z
                .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
                .optional(),
              postMortem: z.string().optional(),
              createdAt: z.string().datetime({ offset: true }),
              closedAt: z.string().datetime({ offset: true }).optional(),
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
const IncidentId = z.string();
const AgentId = z.string();
const KillSwitchOrderId = z.string();
const AuditEventId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  createIncident_Body,
  attachIncidentPostMortem_Body,
  IncidentStatus,
  Incident,
  IncidentCreateRequest,
  IncidentCloseRequest,
  IncidentPostMortemRequest,
  IncidentResponse,
  IncidentListData,
  IncidentListResponse,
  Problem,
  IncidentId,
  AgentId,
  KillSwitchOrderId,
  AuditEventId,
  ResponseMeta,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/incidents',
    alias: 'listIncidents',
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
        schema: z.enum(['open', 'investigating', 'closed']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  incidentId: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
                  title: z.string(),
                  status: z.enum(['open', 'investigating', 'closed']),
                  rootAgentId: z
                    .string()
                    .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  killSwitchOrderId: z
                    .string()
                    .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  auditEventIds: z
                    .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
                    .optional(),
                  postMortem: z.string().optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  closedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/incidents',
    alias: 'createIncident',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createIncident_Body,
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
            incidentId: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
            title: z.string(),
            status: z.enum(['open', 'investigating', 'closed']),
            rootAgentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            killSwitchOrderId: z
              .string()
              .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            auditEventIds: z
              .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
              .optional(),
            postMortem: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            closedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/incidents/:incidentId',
    alias: 'getIncident',
    requestFormat: 'json',
    parameters: [
      {
        name: 'incidentId',
        type: 'Path',
        schema: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            incidentId: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
            title: z.string(),
            status: z.enum(['open', 'investigating', 'closed']),
            rootAgentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            killSwitchOrderId: z
              .string()
              .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            auditEventIds: z
              .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
              .optional(),
            postMortem: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            closedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/incidents/:incidentId/close',
    alias: 'closeIncident',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ summary: z.string().min(1) }).passthrough(),
      },
      {
        name: 'incidentId',
        type: 'Path',
        schema: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            incidentId: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
            title: z.string(),
            status: z.enum(['open', 'investigating', 'closed']),
            rootAgentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            killSwitchOrderId: z
              .string()
              .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            auditEventIds: z
              .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
              .optional(),
            postMortem: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            closedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/incidents/:incidentId/post-mortem',
    alias: 'attachIncidentPostMortem',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: attachIncidentPostMortem_Body,
      },
      {
        name: 'incidentId',
        type: 'Path',
        schema: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            incidentId: z.string().regex(/^inc_[0-9A-HJKMNP-TV-Z]{26}$/),
            title: z.string(),
            status: z.enum(['open', 'investigating', 'closed']),
            rootAgentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            killSwitchOrderId: z
              .string()
              .regex(/^ksw_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            auditEventIds: z
              .array(z.string().regex(/^aud_[0-9A-HJKMNP-TV-Z]{26}$/))
              .optional(),
            postMortem: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            closedAt: z.string().datetime({ offset: true }).optional(),
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
]);

export const api: any = new Zodios('https://api.agentfence.local/v1', endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
