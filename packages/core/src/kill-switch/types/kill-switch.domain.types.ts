/**
 * Kill Switch Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/kill-switch.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type KillSwitchBlastRadius = components["schemas"]["KillSwitchBlastRadius"];
export type KillSwitchOrder = components["schemas"]["KillSwitchOrder"];
export type KillSwitchOrderListData = components["schemas"]["KillSwitchOrderListData"];
export type KillSwitchStatus = components["schemas"]["KillSwitchStatus"];
export type KillSwitchAckRequest = components["schemas"]["KillSwitchAckRequest"];
export type KillSwitchArmRequest = components["schemas"]["KillSwitchArmRequest"];
export type KillSwitchOrderCreateRequest = components["schemas"]["KillSwitchOrderCreateRequest"];
export type Order = operations["listKillSwitchOrders"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type InvokeKillSwitchRequestInput = NonNullable<operations["invokeKillSwitch"]["requestBody"]>["content"]["application/json"];
export type ArmKillSwitchRequestInput = NonNullable<operations["armKillSwitch"]["requestBody"]>["content"]["application/json"];
export type RecordKillSwitchAckRequestInput = NonNullable<operations["recordKillSwitchAck"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListKillSwitchOrdersParams = NonNullable<operations["listKillSwitchOrders"]["parameters"]["query"]>;
export type GetKillSwitchOrderParams = operations["getKillSwitchOrder"]["parameters"]["path"];
export type ArmKillSwitchParams = operations["armKillSwitch"]["parameters"]["path"];
export type GetKillSwitchBlastRadiusParams = operations["getKillSwitchBlastRadius"]["parameters"]["path"];
export type RecordKillSwitchAckParams = operations["recordKillSwitchAck"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListKillSwitchOrdersResponse = operations["listKillSwitchOrders"]["responses"]["200"]["content"]["application/json"];
export type InvokeKillSwitchResponse = operations["invokeKillSwitch"]["responses"]["202"]["content"]["application/json"];
export type GetKillSwitchOrderResponse = operations["getKillSwitchOrder"]["responses"]["200"]["content"]["application/json"];
export type ArmKillSwitchResponse = operations["armKillSwitch"]["responses"]["200"]["content"]["application/json"];
export type GetKillSwitchBlastRadiusResponse = operations["getKillSwitchBlastRadius"]["responses"]["200"]["content"]["application/json"];
export type RecordKillSwitchAckResponse = operations["recordKillSwitchAck"]["responses"]["200"]["content"]["application/json"];


