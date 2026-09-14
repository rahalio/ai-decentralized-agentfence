/**
 * Agents Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/agents.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AgentCredentialRotation = components["schemas"]["AgentCredentialRotation"];
export type AgentIdentity = components["schemas"]["AgentIdentity"];
export type AgentIdentityListData = components["schemas"]["AgentIdentityListData"];
export type AgentStatus = components["schemas"]["AgentStatus"];
export type RuntimeType = components["schemas"]["RuntimeType"];
export type ShadowConflict = components["schemas"]["ShadowConflict"];
export type ShadowConflictListData = components["schemas"]["ShadowConflictListData"];
export type AgentMarketplaceMapRequest = components["schemas"]["AgentMarketplaceMapRequest"];
export type AgentRegisterRequest = components["schemas"]["AgentRegisterRequest"];
export type AgentSuspendRequest = components["schemas"]["AgentSuspendRequest"];
export type AgentUpdateRequest = components["schemas"]["AgentUpdateRequest"];
export type Agent = operations["listAgents"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RegisterAgentRequestInput = NonNullable<operations["registerAgent"]["requestBody"]>["content"]["application/json"];
export type UpdateAgentRequestInput = NonNullable<operations["updateAgent"]["requestBody"]>["content"]["application/json"];
export type UpdateAgentRequest = UpdateAgentRequestInput;
export type MapAgentMarketplaceIdsRequestInput = NonNullable<operations["mapAgentMarketplaceIds"]["requestBody"]>["content"]["application/json"];
export type SuspendAgentRequestInput = NonNullable<operations["suspendAgent"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAgentsParams = NonNullable<operations["listAgents"]["parameters"]["query"]>;
export type GetAgentParams = operations["getAgent"]["parameters"]["path"];
export type UpdateAgentParams = operations["updateAgent"]["parameters"]["path"];
export type RotateAgentCredentialsParams = operations["rotateAgentCredentials"]["parameters"]["path"];
export type MapAgentMarketplaceIdsParams = operations["mapAgentMarketplaceIds"]["parameters"]["path"];
export type SuspendAgentParams = operations["suspendAgent"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListAgentsResponse = operations["listAgents"]["responses"]["200"]["content"]["application/json"];
export type RegisterAgentResponse = operations["registerAgent"]["responses"]["201"]["content"]["application/json"];
export type ListShadowAgentConflictsResponse = operations["listShadowAgentConflicts"]["responses"]["200"]["content"]["application/json"];
export type GetAgentResponse = operations["getAgent"]["responses"]["200"]["content"]["application/json"];
export type UpdateAgentResponse = operations["updateAgent"]["responses"]["200"]["content"]["application/json"];
export type RotateAgentCredentialsResponse = operations["rotateAgentCredentials"]["responses"]["200"]["content"]["application/json"];
export type MapAgentMarketplaceIdsResponse = operations["mapAgentMarketplaceIds"]["responses"]["200"]["content"]["application/json"];
export type SuspendAgentResponse = operations["suspendAgent"]["responses"]["200"]["content"]["application/json"];


