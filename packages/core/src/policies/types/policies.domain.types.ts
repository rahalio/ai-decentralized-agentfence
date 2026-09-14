/**
 * Policies Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/policies.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ActionDecision = components["schemas"]["ActionDecision"];
export type AutonomyPolicy = components["schemas"]["AutonomyPolicy"];
export type AutonomyPolicyListData = components["schemas"]["AutonomyPolicyListData"];
export type AutonomyPolicyStatus = components["schemas"]["AutonomyPolicyStatus"];
export type BoundaryRule = components["schemas"]["BoundaryRule"];
export type PolicyException = components["schemas"]["PolicyException"];
export type ActionEvaluationRequest = components["schemas"]["ActionEvaluationRequest"];
export type AutonomyPolicyCreateRequest = components["schemas"]["AutonomyPolicyCreateRequest"];
export type AutonomyPolicyUpdateRequest = components["schemas"]["AutonomyPolicyUpdateRequest"];
export type PolicyExceptionRequest = components["schemas"]["PolicyExceptionRequest"];
export type Policy = operations["listAutonomyPolicies"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateAutonomyPolicyRequestInput = NonNullable<operations["createAutonomyPolicy"]["requestBody"]>["content"]["application/json"];
export type EvaluateAgentActionRequestInput = NonNullable<operations["evaluateAgentAction"]["requestBody"]>["content"]["application/json"];
export type SimulateAgentActionRequestInput = NonNullable<operations["simulateAgentAction"]["requestBody"]>["content"]["application/json"];
export type GrantPolicyExceptionRequestInput = NonNullable<operations["grantPolicyException"]["requestBody"]>["content"]["application/json"];
export type UpdateAutonomyPolicyRequestInput = NonNullable<operations["updateAutonomyPolicy"]["requestBody"]>["content"]["application/json"];
export type UpdateAutonomyPolicyRequest = UpdateAutonomyPolicyRequestInput;


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAutonomyPoliciesParams = NonNullable<operations["listAutonomyPolicies"]["parameters"]["query"]>;
export type GetAutonomyPolicyParams = operations["getAutonomyPolicy"]["parameters"]["path"];
export type UpdateAutonomyPolicyParams = operations["updateAutonomyPolicy"]["parameters"]["path"];
export type PublishAutonomyPolicyParams = operations["publishAutonomyPolicy"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListAutonomyPoliciesResponse = operations["listAutonomyPolicies"]["responses"]["200"]["content"]["application/json"];
export type CreateAutonomyPolicyResponse = operations["createAutonomyPolicy"]["responses"]["201"]["content"]["application/json"];
export type EvaluateAgentActionResponse = operations["evaluateAgentAction"]["responses"]["200"]["content"]["application/json"];
export type SimulateAgentActionResponse = operations["simulateAgentAction"]["responses"]["200"]["content"]["application/json"];
export type GrantPolicyExceptionResponse = operations["grantPolicyException"]["responses"]["201"]["content"]["application/json"];
export type GetAutonomyPolicyResponse = operations["getAutonomyPolicy"]["responses"]["200"]["content"]["application/json"];
export type UpdateAutonomyPolicyResponse = operations["updateAutonomyPolicy"]["responses"]["200"]["content"]["application/json"];
export type PublishAutonomyPolicyResponse = operations["publishAutonomyPolicy"]["responses"]["200"]["content"]["application/json"];


