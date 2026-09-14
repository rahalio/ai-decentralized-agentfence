import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createPeriodReport_Body = z
  .object({
    period: z.string().min(1),
    agentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    summary: z.string().optional(),
  })
  .passthrough();
const ComplianceExport = z
  .object({
    agentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    period: z.string(),
    auditEventCount: z.number().int(),
    deniedActions: z.number().int(),
    killSwitchInvocations: z.number().int(),
    exportRef: z.string().optional(),
  })
  .passthrough();
const ComplianceExportResponse = z
  .object({
    data: z
      .object({
        agentId: z
          .string()
          .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        period: z.string(),
        auditEventCount: z.number().int(),
        deniedActions: z.number().int(),
        killSwitchInvocations: z.number().int(),
        exportRef: z.string().optional(),
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
const PeriodReport = z
  .object({
    reportId: z.string().regex(/^rpt_[0-9A-HJKMNP-TV-Z]{26}$/),
    period: z.string(),
    agentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    summary: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const PeriodReportCreateRequest = z
  .object({
    period: z.string().min(1),
    agentId: z
      .string()
      .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    summary: z.string().optional(),
  })
  .passthrough();
const PeriodReportResponse = z
  .object({
    data: z
      .object({
        reportId: z.string().regex(/^rpt_[0-9A-HJKMNP-TV-Z]{26}$/),
        period: z.string(),
        agentId: z
          .string()
          .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        summary: z.string().optional(),
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
const PeriodReportListData = z
  .object({
    items: z.array(
      z
        .object({
          reportId: z.string().regex(/^rpt_[0-9A-HJKMNP-TV-Z]{26}$/),
          period: z.string(),
          agentId: z
            .string()
            .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          summary: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const PeriodReportListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              reportId: z.string().regex(/^rpt_[0-9A-HJKMNP-TV-Z]{26}$/),
              period: z.string(),
              agentId: z
                .string()
                .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              summary: z.string().optional(),
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
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const ReportId = z.string();

export const schemas: any = {
  createPeriodReport_Body,
  ComplianceExport,
  ComplianceExportResponse,
  PeriodReport,
  PeriodReportCreateRequest,
  PeriodReportResponse,
  PeriodReportListData,
  PeriodReportListResponse,
  AgentId,
  Problem,
  ResponseMeta,
  ReportId,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/reports',
    alias: 'listReports',
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
                  reportId: z.string().regex(/^rpt_[0-9A-HJKMNP-TV-Z]{26}$/),
                  period: z.string(),
                  agentId: z
                    .string()
                    .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  summary: z.string().optional(),
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
    path: '/v1/reports',
    alias: 'createPeriodReport',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createPeriodReport_Body,
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
            reportId: z.string().regex(/^rpt_[0-9A-HJKMNP-TV-Z]{26}$/),
            period: z.string(),
            agentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            summary: z.string().optional(),
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
    ],
  },
  {
    method: 'get',
    path: '/v1/reports/:reportId',
    alias: 'getReport',
    requestFormat: 'json',
    parameters: [
      {
        name: 'reportId',
        type: 'Path',
        schema: z.string().regex(/^rpt_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            reportId: z.string().regex(/^rpt_[0-9A-HJKMNP-TV-Z]{26}$/),
            period: z.string(),
            agentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            summary: z.string().optional(),
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
    path: '/v1/reports/compliance',
    alias: 'getComplianceExport',
    requestFormat: 'json',
    parameters: [
      {
        name: 'agentId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
      {
        name: 'period',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            agentId: z
              .string()
              .regex(/^agt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            period: z.string(),
            auditEventCount: z.number().int(),
            deniedActions: z.number().int(),
            killSwitchInvocations: z.number().int(),
            exportRef: z.string().optional(),
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
