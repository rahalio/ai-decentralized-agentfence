import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const submitAddOnPackage_Body = z
  .object({
    name: z.string().min(1),
    version: z.string().min(1),
    artifactRef: z.string().min(1),
  })
  .passthrough();
const AddOnStatus = z.enum(['pending', 'approved', 'blocked', 'revoked']);
const AddOnPackage = z
  .object({
    addOnId: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
    name: z.string(),
    version: z.string(),
    status: z.enum(['pending', 'approved', 'blocked', 'revoked']),
    artifactRef: z.string().optional(),
    attestationRef: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    approvedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const AddOnPackageCreateRequest = z
  .object({
    name: z.string().min(1),
    version: z.string().min(1),
    artifactRef: z.string().min(1),
  })
  .passthrough();
const AddOnAttestRequest = z
  .object({ attestationRef: z.string().min(1) })
  .passthrough();
const AddOnRevokeRequest = z
  .object({ rationale: z.string().min(1) })
  .passthrough();
const AddOnPackageResponse = z
  .object({
    data: z
      .object({
        addOnId: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
        name: z.string(),
        version: z.string(),
        status: z.enum(['pending', 'approved', 'blocked', 'revoked']),
        artifactRef: z.string().optional(),
        attestationRef: z.string().optional(),
        createdAt: z.string().datetime({ offset: true }),
        approvedAt: z.string().datetime({ offset: true }).optional(),
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
const AddOnPackageListData = z
  .object({
    items: z.array(
      z
        .object({
          addOnId: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
          name: z.string(),
          version: z.string(),
          status: z.enum(['pending', 'approved', 'blocked', 'revoked']),
          artifactRef: z.string().optional(),
          attestationRef: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
          approvedAt: z.string().datetime({ offset: true }).optional(),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const AddOnPackageListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              addOnId: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
              name: z.string(),
              version: z.string(),
              status: z.enum(['pending', 'approved', 'blocked', 'revoked']),
              artifactRef: z.string().optional(),
              attestationRef: z.string().optional(),
              createdAt: z.string().datetime({ offset: true }),
              approvedAt: z.string().datetime({ offset: true }).optional(),
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
const AddOnId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  submitAddOnPackage_Body,
  AddOnStatus,
  AddOnPackage,
  AddOnPackageCreateRequest,
  AddOnAttestRequest,
  AddOnRevokeRequest,
  AddOnPackageResponse,
  AddOnPackageListData,
  AddOnPackageListResponse,
  Problem,
  AddOnId,
  ResponseMeta,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/add-ons',
    alias: 'listAddOnPackages',
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
        schema: z
          .enum(['pending', 'approved', 'blocked', 'revoked'])
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
                  addOnId: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
                  name: z.string(),
                  version: z.string(),
                  status: z.enum(['pending', 'approved', 'blocked', 'revoked']),
                  artifactRef: z.string().optional(),
                  attestationRef: z.string().optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  approvedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/add-ons',
    alias: 'submitAddOnPackage',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: submitAddOnPackage_Body,
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
            addOnId: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string(),
            version: z.string(),
            status: z.enum(['pending', 'approved', 'blocked', 'revoked']),
            artifactRef: z.string().optional(),
            attestationRef: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            approvedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/add-ons/:addOnId',
    alias: 'getAddOnPackage',
    requestFormat: 'json',
    parameters: [
      {
        name: 'addOnId',
        type: 'Path',
        schema: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            addOnId: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string(),
            version: z.string(),
            status: z.enum(['pending', 'approved', 'blocked', 'revoked']),
            artifactRef: z.string().optional(),
            attestationRef: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            approvedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/add-ons/:addOnId/approve',
    alias: 'approveAddOnPackage',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ attestationRef: z.string().min(1) }).passthrough(),
      },
      {
        name: 'addOnId',
        type: 'Path',
        schema: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            addOnId: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string(),
            version: z.string(),
            status: z.enum(['pending', 'approved', 'blocked', 'revoked']),
            artifactRef: z.string().optional(),
            attestationRef: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            approvedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/add-ons/:addOnId/revoke',
    alias: 'revokeAddOnPackage',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ rationale: z.string().min(1) }).passthrough(),
      },
      {
        name: 'addOnId',
        type: 'Path',
        schema: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            addOnId: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string(),
            version: z.string(),
            status: z.enum(['pending', 'approved', 'blocked', 'revoked']),
            artifactRef: z.string().optional(),
            attestationRef: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            approvedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/add-ons/:addOnId/unload',
    alias: 'forceUnloadAddOnPackage',
    requestFormat: 'json',
    parameters: [
      {
        name: 'addOnId',
        type: 'Path',
        schema: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            addOnId: z.string().regex(/^ado_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string(),
            version: z.string(),
            status: z.enum(['pending', 'approved', 'blocked', 'revoked']),
            artifactRef: z.string().optional(),
            attestationRef: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
            approvedAt: z.string().datetime({ offset: true }).optional(),
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
