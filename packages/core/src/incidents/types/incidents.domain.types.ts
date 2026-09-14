/**
 * Incidents Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/incidents.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type Incident = components["schemas"]["Incident"];
export type IncidentListData = components["schemas"]["IncidentListData"];
export type IncidentStatus = components["schemas"]["IncidentStatus"];
export type IncidentCloseRequest = components["schemas"]["IncidentCloseRequest"];
export type IncidentCreateRequest = components["schemas"]["IncidentCreateRequest"];
export type IncidentPostMortemRequest = components["schemas"]["IncidentPostMortemRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateIncidentRequestInput = NonNullable<operations["createIncident"]["requestBody"]>["content"]["application/json"];
export type CloseIncidentRequestInput = NonNullable<operations["closeIncident"]["requestBody"]>["content"]["application/json"];
export type AttachIncidentPostMortemRequestInput = NonNullable<operations["attachIncidentPostMortem"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListIncidentsParams = NonNullable<operations["listIncidents"]["parameters"]["query"]>;
export type GetIncidentParams = operations["getIncident"]["parameters"]["path"];
export type CloseIncidentParams = operations["closeIncident"]["parameters"]["path"];
export type AttachIncidentPostMortemParams = operations["attachIncidentPostMortem"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListIncidentsResponse = operations["listIncidents"]["responses"]["200"]["content"]["application/json"];
export type CreateIncidentResponse = operations["createIncident"]["responses"]["201"]["content"]["application/json"];
export type GetIncidentResponse = operations["getIncident"]["responses"]["200"]["content"]["application/json"];
export type CloseIncidentResponse = operations["closeIncident"]["responses"]["200"]["content"]["application/json"];
export type AttachIncidentPostMortemResponse = operations["attachIncidentPostMortem"]["responses"]["200"]["content"]["application/json"];


