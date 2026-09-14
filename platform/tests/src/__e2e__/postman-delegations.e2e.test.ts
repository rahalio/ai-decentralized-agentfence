/**
 * Postman-collection 1:1 Vitest tests for delegations (generated)
 *
 * One it() = one API request. Add sample data to vars for e2e runs.
 * Run: pnpm test:e2e or pnpm test:suite:db
 * Requires: API server at baseUrl (default http://localhost:3000)
 */

import { describe, it, expect } from "vitest";

const vars: Record<string, string> = {
  baseUrl: "http://localhost:3000",
  orgId: "test-org",
  accessToken: "",
  cursor: "",
  delegationId: "",
  limit: "",
  parentAgentId: "",
  rootAgentId: "",
};

function sub(s: string): string {
  return s.replace(/\{\{([^}]+)\}\}/g, (_, k) => vars[k.trim()] ?? "");
}

describe("Postman / delegations (1:1 generated)", () => {

  it("listDelegationEdges", async () => {
    const url = sub("{{baseUrl}}/v1/delegations?cursor={{cursor}}&limit={{limit}}&parentAgentId={{parentAgentId}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("createDelegationEdge", async () => {
    const url = sub("{{baseUrl}}/v1/delegations");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"parentAgentId\": \"newman_parentAgentId\",\n  \"childAgentId\": \"newman_childAgentId\"\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
    if (j?.data?.id) vars['delegationEdgeId'] = j.data.id;
  });

  it("getDelegationGraph", async () => {
    const url = sub("{{baseUrl}}/v1/delegations/graph?rootAgentId={{rootAgentId}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("getDelegationEdge", async () => {
    const url = sub("{{baseUrl}}/v1/delegations/{{delegationId}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("getDelegationInheritance", async () => {
    const url = sub("{{baseUrl}}/v1/delegations/{{delegationId}}/inheritance");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });
});
