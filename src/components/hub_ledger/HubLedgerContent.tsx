
import React, { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'
import FilterBar from '@/components/common/FilterBar'
import EmptyState from '@/components/common/EmptyState'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import { LedgerEntryService } from '@/data/LedgerEntryService'
import { HubService } from '@/data/HubService'
import type { LedgerEntryData } from '@/data/LedgerEntryData'
import { toast } from 'sonner'

export default function HubLedgerContent() {
  const [isClient, setIsClient] = useState(true)
  const [hubId, setHubId] = useState<string>('')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [entityTypeFilter, setEntityTypeFilter] = useState('all')
  const [actionTypeFilter, setActionTypeFilter] = useState('all')
  const [actorRoleFilter, setActorRoleFilter] = useState('all')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const allLedgerEntries = useMemo(() => LedgerEntryService.getAll(), [])
  const allHubs = useMemo(() => HubService.getAll(), [])

  const currentHub = useMemo(() => {
    if (!hubId) return allHubs[0]
    return HubService.getById(hubId) || allHubs[0]
  }, [hubId, allHubs])

  const filteredEntries = useMemo(() => {
    let result = allLedgerEntries.filter((entry) => entry.hubId === currentHub?.id)

    if (searchKeyword.trim()) {
      const kw = searchKeyword.toLowerCase()
      result = result.filter(
        (entry) =>
          entry.note.toLowerCase().includes(kw) ||
          entry.referenceCode.toLowerCase().includes(kw) ||
          entry.entityId.toLowerCase().includes(kw)
      )
    }

    if (entityTypeFilter !== 'all') {
      result = result.filter((entry) => entry.entityType === entityTypeFilter)
    }

    if (actionTypeFilter !== 'all') {
      result = result.filter((entry) => entry.actionType === actionTypeFilter)
    }

    if (actorRoleFilter !== 'all') {
      result = result.filter((entry) => entry.actorRole === actorRoleFilter)
    }

    if (startDate) {
      const start = new Date(startDate).getTime()
      result = result.filter((entry) => new Date(entry.occurredAt).getTime() >= start)
    }

    if (endDate) {
      const end = new Date(endDate).getTime()
      result = result.filter((entry) => new Date(entry.occurredAt).getTime() <= end)
    }

    return result.sort((a, b) => new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime())
  }, [allLedgerEntries, currentHub?.id, searchKeyword, entityTypeFilter, actionTypeFilter, actorRoleFilter, startDate, endDate])

  useEffect(() => {
    setIsClient(false)
    const params = new URLSearchParams(window.location.search)
    const urlHubId = params.get('hubId')
    const urlStartDate = params.get('startDate')
    const urlEndDate = params.get('endDate')

    if (urlHubId) setHubId(urlHubId)
    if (urlStartDate) setStartDate(urlStartDate)
    if (urlEndDate) setEndDate(urlEndDate)

    requestAnimationFrame(() => {
      setIsClient(true)
    })
  }, [])

  const handleResetFilters = () => {
    setSearchKeyword('')
    setEntityTypeFilter('all')
    setActionTypeFilter('all')
    setActorRoleFilter('all')
    setStartDate('')
    setEndDate('')
    toast.success('Filters reset')
  }

  const handleExport = () => {
    setIsLoading(true)
    setTimeout(() => {
      const csv = [
        ['Reference Code', 'Entity Type', 'Action Type', 'Actor Role', 'Occurred At', 'Note'].join(','),
        ...filteredEntries.map((entry) =>
          [
            entry.referenceCode,
            entry.entityType,
            entry.actionType,
            entry.actorRole,
            entry.occurredAt,
            `"${entry.note}"`,
          ].join(',')
        ),
      ].join('\n')

      const blob = new Blob([csv], { type: 'text/csv' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `ledger-${currentHub?.code || 'hub'}-${new Date().toISOString().split('T')[0]}.csv`
      a.click()
      URL.revokeObjectURL(url)
      setIsLoading(false)
      toast.success('Ledger exported successfully')
    }, 800)
  }

  const handleBackToLogistics = () => {
    window.location.href = `./hub-logistics.html?hubId=${currentHub?.id}`
  }

  const getEntityTypeIcon = (type: string) => {
    switch (type) {
      case 'Delivery':
        return 'Truck'
      case 'Pickup':
        return 'ShoppingBag'
      case 'Payment':
        return 'CreditCard'
      case 'Order':
        return 'ClipboardList'
      default:
        return 'Circle'
    }
  }

  const getActionTypeColor = (action: string) => {
    switch (action) {
      case 'Created':
        return 'text-blue-600'
      case 'Updated':
        return 'text-amber-600'
      case 'Received':
        return 'text-green-600'
      case 'Dispatched':
        return 'text-purple-600'
      case 'Verified':
        return 'text-teal-600'
      case 'Completed':
        return 'text-emerald-600'
      default:
        return 'text-gray-600'
    }
  }

  if (!isClient) {
    return (
      <div className="page-body">
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="md" text="Loading ledger..." />
        </div>
      </div>
    )
  }

  return (
    <div className="page-body space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBackToLogistics}
              className="h-9 w-9 -ml-2"
            >
              <SafeIcon name="ArrowLeft" size={20} />
            </Button>
            <h1 className="text-page-title">Inventory & Track Record</h1>
          </div>
          <p className="text-caption ml-11">
            Complete audit trail of all deliveries, pickups, and transactions for{' '}
            <span className="font-semibold text-foreground">{currentHub?.name}</span>
          </p>
        </div>
        <Button
          onClick={handleExport}
          disabled={isLoading || filteredEntries.length === 0}
          className="shadow-sm"
        >
          {isLoading ? (
            <>
              <SafeIcon name="Loader2" size={16} className="mr-2 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <SafeIcon name="Download" size={16} className="mr-2" />
              Export CSV
            </>
          )}
        </Button>
      </div>

      {/* Hub Info Card */}
      <Card className="surface-base border-primary/20 bg-primary/5">
        <CardContent className="card-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <p className="text-caption font-medium uppercase tracking-wider">Hub Name</p>
              <p className="text-base font-semibold text-foreground mt-1">{currentHub?.name}</p>
            </div>
            <div>
              <p className="text-caption font-medium uppercase tracking-wider">Hub Code</p>
              <p className="text-base font-semibold text-primary mt-1">{currentHub?.code}</p>
            </div>
            <div>
              <p className="text-caption font-medium uppercase tracking-wider">Location</p>
              <p className="text-base font-semibold text-foreground mt-1">
                {currentHub?.city}, {currentHub?.region}
              </p>
            </div>
            <div>
              <p className="text-caption font-medium uppercase tracking-wider">Total Entries</p>
              <p className="text-base font-semibold text-accent mt-1">{filteredEntries.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="surface-base">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Filter Ledger</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="flex items-center gap-2">
              <SafeIcon name="Search" size={18} className="text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by reference code, note, or entity ID..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="flex-1 h-9"
              />
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-label">Start Date</label>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="h-9"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-label">End Date</label>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="h-9"
                />
              </div>
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-label">Entity Type</label>
                <Select value={entityTypeFilter} onValueChange={setEntityTypeFilter}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Delivery">Delivery</SelectItem>
                    <SelectItem value="Pickup">Pickup</SelectItem>
                    <SelectItem value="Payment">Payment</SelectItem>
                    <SelectItem value="Order">Order</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-label">Action Type</label>
                <Select value={actionTypeFilter} onValueChange={setActionTypeFilter}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="All Actions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Actions</SelectItem>
                    <SelectItem value="Created">Created</SelectItem>
                    <SelectItem value="Updated">Updated</SelectItem>
                    <SelectItem value="Received">Received</SelectItem>
                    <SelectItem value="Dispatched">Dispatched</SelectItem>
                    <SelectItem value="Verified">Verified</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-label">Actor Role</label>
                <Select value={actorRoleFilter} onValueChange={setActorRoleFilter}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="All Roles" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="Farmer">Farmer</SelectItem>
                    <SelectItem value="Hub">Hub</SelectItem>
                    <SelectItem value="Consumer">Consumer</SelectItem>
                    <SelectItem value="System">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Reset Button */}
            <div className="flex justify-end pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetFilters}
                className="text-muted-foreground"
              >
                <SafeIcon name="RotateCcw" size={14} className="mr-2" />
                Reset Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ledger Table */}
      <Card className="surface-base">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">
            Ledger Entries ({filteredEntries.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {filteredEntries.length === 0 ? (
            <div className="p-8">
              <EmptyState
                iconName="FileText"
                title="No Ledger Entries"
                description="No transactions match your current filters. Try adjusting your date range or filter criteria."
                actionLabel="Reset Filters"
                onAction={handleResetFilters}
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/30 sticky top-0">
                  <TableRow className="hover:bg-muted/30 border-b">
                    <TableHead className="w-32 whitespace-nowrap font-semibold">
                      Reference Code
                    </TableHead>
                    <TableHead className="w-24 whitespace-nowrap font-semibold">
                      Entity Type
                    </TableHead>
                    <TableHead className="w-28 whitespace-nowrap font-semibold">
                      Action Type
                    </TableHead>
                    <TableHead className="w-24 whitespace-nowrap font-semibold">
                      Actor Role
                    </TableHead>
                    <TableHead className="w-40 whitespace-nowrap font-semibold">
                      Occurred At
                    </TableHead>
                    <TableHead className="min-w-64 font-semibold">Note</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEntries.map((entry) => (
                    <TableRow
                      key={entry.id}
                      className="table-row-hover border-b hover:bg-muted/20"
                    >
                      <TableCell className="w-32 whitespace-nowrap">
                        <span className="font-mono text-sm font-semibold text-primary">
                          {entry.referenceCode}
                        </span>
                      </TableCell>
                      <TableCell className="w-24 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <SafeIcon
                            name={getEntityTypeIcon(entry.entityType)}
                            size={16}
                            className="text-muted-foreground"
                          />
                          <span className="text-sm font-medium">{entry.entityType}</span>
                        </div>
                      </TableCell>
                      <TableCell className="w-28 whitespace-nowrap">
                        <span className={cn('text-sm font-semibold', getActionTypeColor(entry.actionType))}>
                          {entry.actionType}
                        </span>
                      </TableCell>
                      <TableCell className="w-24 whitespace-nowrap">
                        <span className="text-sm text-muted-foreground">{entry.actorRole}</span>
                      </TableCell>
                      <TableCell className="w-40 whitespace-nowrap">
                        <span className="text-sm text-muted-foreground">
                          {new Date(entry.occurredAt).toLocaleString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </TableCell>
                      <TableCell className="min-w-64">
                        <span className="text-sm text-foreground line-clamp-2">
                          {entry.note}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary Footer */}
      {filteredEntries.length > 0 && (
        <Card className="surface-base bg-muted/20 border-muted">
          <CardContent className="card-padding">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-caption font-medium uppercase tracking-wider">Total Entries</p>
                <p className="text-2xl font-bold text-foreground mt-1">{filteredEntries.length}</p>
              </div>
              <div>
                <p className="text-caption font-medium uppercase tracking-wider">Deliveries</p>
                <p className="text-2xl font-bold text-primary mt-1">
                  {filteredEntries.filter((e) => e.entityType === 'Delivery').length}
                </p>
              </div>
              <div>
                <p className="text-caption font-medium uppercase tracking-wider">Pickups</p>
                <p className="text-2xl font-bold text-accent mt-1">
                  {filteredEntries.filter((e) => e.entityType === 'Pickup').length}
                </p>
              </div>
              <div>
                <p className="text-caption font-medium uppercase tracking-wider">Completed</p>
                <p className="text-2xl font-bold text-success mt-1">
                  {filteredEntries.filter((e) => e.actionType === 'Completed').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
